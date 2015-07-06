from BeautifulSoup import BeautifulSoup as bs
from htmlgen import *
import json

def get_type(typ):
	t={"SingleLine":"text","Date":"date","MultiLine":"textarea", "Number":"number","Currency":"number","NumberFormula":"number","DateTime":"datetime"}
	return t[typ]

def get_format_based_field(field):
	if field["FieldFormat"] == "Date":
		inp = DateInput()
		inp.add_css_classes("datepicker")
		inp.set_attribute("data-format","dd/MM/yyyy")
		inp.set_attribute("date-picker","")
	elif field["FieldFormat"] == "MultiLine":
		inp = Element("textarea")
		inp.add_css_classes("materialize-textarea")
	elif field["FieldFormat"] == "DateTime":
		inp = Input()
		inp.add_css_classes("modal-trigger")
		inp.set_attribute("open-modal","")
		inp.set_attribute("href","#modal{}".format(field["Id"]))
		inp.set_attribute("data-format","dd/MM/yyyy")
	elif field["Type"] == "Dropdown":
		inp = Element("select")
		inp.set_attribute("materialize-select","true")
		option = Element("option")
		option.set_attribute("value","")
		option.set_attribute("disabled","disabled")
		option.append("Choose your option")
		inp.append(option)
		for choice in field["Choice"]:
			choice_option = Element("option")
			choice_option.value = choice
			choice_option.append(choice)
			inp.append(choice_option)
	elif field["Type"]=="Lookup":
		inp = Input()
		inp.add_css_classes("hidden")
		inp.id = field["Id"]
		inp.set_attribute("flow-lookup-field-value","{{formData.getValue('%s')}}"%(field["Name"]))
		inp.set_attribute("flow-lookup-field",field["FieldLabel"])
	else:
		inp = Input()
	inp.set_attribute("ng-model-options","{updateOn:'blur'}")
	return inp

def get_validation(field,inp):
	if field.get("StringValidations") != None:
		string_val= field.get("StringValidations")
		inp.set_attribute("validate-string",string_val)
	if field.get("NumberValidations") != None:
		conditions = field.get("NumberValidations")
		val=""
		for condition in conditions:
			if condition["RHSType"] == "Field":
				val+= "viewValue %s {{formData.getValue('%s')}}"%(condition["Operator"],condition["RHS"])
			else:
				val+= "viewValue %s %s"%(condition["Operator"],condition["RHS"])
			if conditions.index(condition) != len(conditions)-1:
				val+= " && "
		inp.set_attribute("validate-number",val)
	if field.get("Required") != None:
		inp.set_attribute("ng-required","true")
	if field.get("MaxCharacters")!= None:
		inp.set_attribute("maxlength",str(field["MaxCharacters"]))
	return inp 


def show_perm(field,div):
	permissions = js.get("permissions")
	show =""
	for i in permissions.keys():
		a= permissions[i]
		p=""		
		for j in a:
			if j["Id"] == field["Id"] and i =="default" :
				print j["Id"]
				p= [j.get('Visible','true'),j.get('Disabled','false'), j.get('Condition','true')]
				show+=p[0]
				if p[2] != 'true' :
					show+=" && "
				if isinstance(p[2],list) == True:
					for condition in p[2]:
						if condition["RHSType"] == "Value":
							show+= "%s %s %s"%(condition["LHS"],condition["Operator"],condition["RHS"])
						else:
							show+= "%s %s {{formData.getValue('%s')}}"%(condition["LHS"],condition["Operator"],condition["RHS"])
						if p[2].index(condition) < len(p[2])-1:
							show+= " && "
			elif j["Id"] == field["Id"] and i !="default":
				p = j.get("Visible",'true')
				if show !="" and p == "false":
					show+=" && stepName!='{}'".format(i)
	if show!="":
		div.set_attribute("ng-if",show)
	return div

def disable_perm(field,inp):
	permissions = js.get("permissions")
	disabled="stepName!=='Step001'"
	for i in permissions.keys():
		a= permissions[i]
		p="false"
		for j in a:
			if j["Id"] == field["Id"] :
				p= j.get('Disabled','false')
				if p == "true":
					disabled+=" || stepName!='{}'".format(i)
	if disabled=="":
		disabled = "stepName!=='Step001'"
	inp.set_attribute("ng-disabled",disabled)
	return inp

def form_section(form,fieldset):
	fields = form["fields"]
	for field in fields:
		div = Division()
		if field["FieldFormat"] == "MultiLine":
			div.add_css_classes("input-field col {{colSize}}")
		else:
			div.add_css_classes("input-field col {{colSize}} gap-bottom20")
		if field["FieldFormat"] == "DateTime":
			date_time = Element("time-date-picker")
			date_time.set_attribute("id","modal{}".format(field["Id"]))
			date_time.set_attribute("ng-model","formData.{}".format(field["Name"]))
			date_time.set_attribute("on-save","update($value,'{}')".format(field["Name"]))
			date_time.set_attribute("display-mode","full")
			date_time.set_attribute("flow-bind","")
			date_time.set_attribute("data-format","dd/MM/yyyy")
			date_time.add_css_classes("modal")
			date_time.set_attribute("name",field["Name"])
			div.append(date_time)
		inp = get_format_based_field(field)
		inp.id = field["Id"]
		inp.type=get_type(field["FieldFormat"])
		inp = get_validation(field,inp)
		inp.set_attribute("flow-bind","")
		inp.set_attribute("ng-model","formData.{}".format(field["Name"]))
		inp.name = field["Name"]
		div.append(inp)
		div = show_perm(field,div)
		inp = disable_perm(field,inp)
		msg = Division()
		msg.set_attribute("ng-messages","form.{}.$error".format(field["Name"]))
		msg.set_attribute("ng-messages-include","error-messages")
		if field.get("ErrorMessage") !=None:
			custom_message = Division()
			if field.get("StringValidations")!=None:
				custom_message.set_attribute("ng-message","validateString")
			if field.get("NumberValidations")!=None:
				custom_message.set_attribute("ng-message","validateNumber")
			custom_message.add_css_classes("error_text")
			custom_message.append(field["ErrorMessage"])
			msg.append(custom_message)
		div.append(msg)
		label = element.Element("label")
		label.set_attribute("for",field["Id"])
		label.set_attribute("ng-class","{active: !!formData.getValue('%s')}"%(field["Name"]))
		label.append(field["FieldLabel"])
		div.append(label)
		fieldset.append(div)
	return fieldset



def form_table(table):
	fields =  table["form"]
	table_head=TableHead()
	trow = TableRow()
	table_head.append(trow)
	for field in fields:
		trow.append(TableHeaderCell(field["Name"]))	
	tbody = TableBody()
	trow2 = TableRow()
	trow2.set_attribute("ng-repeat","item in formData.getList('{}')".format(table["Id"]))
	trow2 =show_perm(table,trow2)
	for field in fields:
		td = TableCell()
		if field["FieldFormat"] == "DateTime":
			date_time = Element("time-date-picker")
			date_time.set_attribute("id","modal{}".format(field["Id"]))
			date_time.set_attribute("ng-model","formData.{}".format(field["Name"]))
			date_time.set_attribute("on-save","update($value,'{}')".format(field["Name"]))
			date_time.set_attribute("display-mode","full")
			date_time.set_attribute("flow-bind","")
			date_time.set_attribute("data-format","dd/MM/yyyy")
			date_time.add_css_classes("modal")
			date_time.set_attribute("name",field["Name"])
			td.append(date_time)
		inp = get_format_based_field(field)
		inp.id = field["Id"]
		inp.type = get_type(field["FieldFormat"])
		inp.set_attribute("ng-model","item.{}".format(field["Name"]))
		inp.set_attribute("flow-bind","")
		inp = show_perm(field,inp)
		inp = disable_perm(field,inp)
		td.append(inp)
		trow2.append(td)
	tdlink = TableCell()
	link1  = Link("")
	link1.append("EDIT")
	link1.add_css_classes("btn-small btn-flat waves-effect blue-text waves-blue")
	link1.set_attribute("materialize-wave","")
	link2 = Link("")
	link2.append("DELETE")
	link2.add_css_classes("btn-small btn-flat waves-effect red-text waves-red")
	link2.set_attribute("materialize-wave","")
	link2.set_attribute("ng-click","delete('{}',item.id)".format(table["Id"]))
	tdlink.append(link1)
	tdlink.append(link2)
	trow2.append(tdlink)
	tbody.append(trow2)
	return table_head ,tbody

f = open('wizard.json','r') 
js = json.load(f)
form = js["form"]
del(list)
p=""
script  = Script()
script.script = "<div ng-message=\"required\" class=\"error_text\">This field is required</div>"
script.id = "error-messages"
script.set_attribute("type","text/ng-template")

p+=str(script)
head_span = Span(js["Name"])
head_span.add_css_classes("{{globals.color}}-text font-size18 gap-bottom20 center-block")
p+=str(head_span)
form_tag = Form()
form_tag.set_attribute("name","form")
form_tag.add_css_classes("col s12")
form_tag.set_attribute("novalidate","")
for j in form:
	outer_struct = Division()
	outer_struct.add_css_classes("row")
	inner_struct = Division()
	inner_struct.add_css_classes("col s12")
	section_table = eval("{0}()".format(j.get("Type")))
	section_table.set_attribute("name",j.get("Name"))
	section_table.set_attribute("id",j.get("Id"))
	#perm = get_perm(js["get_permissions"])
	if j.get("Type")=="Section":
		fieldset=element.Element("fieldset")
		fieldset = show_perm(j,fieldset)
		fieldset = disable_perm(j,fieldset)
		fieldset = form_section(j,fieldset)
		section_table.append(fieldset)
		inner_struct.append(section_table)
	elif j.get("Type")=="Table":
		thead,trow = form_table(j)
		section_table = show_perm(j,section_table)
		trow = disable_perm(j,trow)
		section_table.append(thead)
		section_table.append(trow)
		inner_struct.append(section_table)
		link_add = Link("")
		link_add.append("<i class=\"mdi-content-add\"></i>ADD NEW ROW")
		link_add.add_css_classes("waves-effect waves-green green-text")
		link_add.set_attribute("ng-click","create('{}')".format(j["Id"]))
		inner_struct.append(link_add)
	outer_struct.append(inner_struct)
	form_tag.append(outer_struct)
p+=str(form_tag)
p+="<div class=\"clear\"></div>"
soup = bs(p)
p=soup.prettify()
p =p.replace("&lt;","<")
p =p.replace("&gt;",">")
p =p.replace("&amp;","&")
file_out = open("../../../../../flowruntime/flow/static/shared/views/Process002/form.html","w")
file_out.write(p)
print p
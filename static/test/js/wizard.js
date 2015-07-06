var wizardJson = {
  "Id": "Process001", 
  "Name": "Travel Expense", 
  "Process Description": "This process allows employees to apply for travel expense reimbursement get it approved by their supervisors and finance team.", 
  "Form Layout": "Auto", 
  "form": [
    {
      "Id": "Section001", 
      "Name": "Travel Section", 
      "Type": "Section", 
      "hints": "Process Employee expense reimbursements.", 
      "fields": [
        {
          "Id": "Field001", 
          "Name": "Requester_Name", 
          "Field Label": "Requester Name", 
          "Field Format": "TextFormula", 
          "Formula": "CreatedBy.FullName"
        }, 
        {
          "Id": "Field002", 
          "Name": "Requested_On", 
          "Field Label": "Requested On", 
          "Field Format": "DateFormula", 
          "Formula": "CreatedAt"
        }, 
        {
          "Id": "Field003", 
          "Name": "Travel_Start_Date", 
          "Field Label": "Travel Start Date", 
          "Field Format": "Date", 
          "Required": 1
        }, 
        {
          "Id": "Field004", 
          "Name": "Travel_End_Date", 
          "Field Label": "Travel End Date", 
          "Field Format": "Date", 
          "Required": 1, 
          "Date Validations": [
            {
              "Id": "Condition001", 
              "Operator": "gt", 
              "RHSType": "Field", 
              "RHSValue": "Travel_Start_Date"
            }
          ]
        }, 
        {
          "Id": "Field005", 
          "Name": "Destination", 
          "Field Label": "Destination", 
          "Field Format": "SingleLine", 
          "Required": 1
        }, 
        {
          "Id": "Field006", 
          "Name": "Purpose", 
          "Field Label": "Purpose", 
          "Field Format": "MultiLine", 
          "Max Characters": 500
        }, 
        {
          "Id": "Field007", 
          "Name": "Total_Days", 
          "Field Label": "Total Days", 
          "Field Format": "NumberFormula", 
          "Formula": "Travel_End_Date - Travel_Start_Date", 
          "Decimal Places": 2
        }
      ]
    }, 
    {
      "Id": "Table001", 
      "Type": "Table", 
      "form": [
        {
          "Id": "Section011", 
          "Type": "Section", 
          "Name": "Expense Details", 
          "hints": "Day wise expense details", 
          "fields": [
            {
              "Id": "Field011", 
              "Name": "Date", 
              "Field Label": "Date", 
              "Field Format": "Date"
            }, 
            {
              "Id": "Field012", 
              "Name": "Expense_Type", 
              "Field Label": "Expense Type", 
              "Field Format": "SingleLine"
            }, 
            {
              "Id": "Field013", 
              "Name": "Amount", 
              "Field Label": "Amount", 
              "Field Format": "Currency", 
              "Decimal Places": 2, 
              "Number Validations": [
                {
                  "Id": "Condition011", 
                  "Operator": "gt", 
                  "RHSType": "Value", 
                  "RHSValue": 0
                }
              ]
            }
          ]
        }
      ]
    }
  ], 
  "worflow": {
    "Steps": [
      {
        "Id": "Step001", 
        "Name": "Manager Approval", 
        "Type": "Approval", 
        "AssignedFor": "User", 
        "AssignedTo": "CreatedBy"
      }, 
      {
        "Id": "Step002", 
        "Type": "Parallel", 
        "Branches": [
          {
            "Id": "Branch001", 
            "Name": "B1", 
            "Steps": [
              {
                "Id": "Step011", 
                "Name": "Manager Approval", 
                "Type": "Approval", 
                "AssignedFor": "User", 
                "AssignedTo": "CreatedBy"
              }
            ]
          }, 
          {
            "Id": "Branch002", 
            "Name": "B2", 
            "Condition": "Amount > 10(need to write formula data structure)", 
            "Steps": [
              {
                "Id": "Step021", 
                "Name": "Manager Approval", 
                "Type": "Approval", 
                "AssignedFor": "User", 
                "AssignedTo": "CreatedBy"
              }
            ]
          }
        ]
      }
    ]
  }, 
  "permission": {
    "default": [
      {
        "Id": "Perm001", 
        "Section": "Section001", 
        "Type": "InVisible"
      }, 
      {
        "Id": "Perm002", 
        "Type": "Conditional", 
        "Field": "Field001", 
        "Condition": [
          {
            "Id": "Condition011", 
            "Operator": "gt", 
            "RHSType": "Value", 
            "RHSField": "Field003"
          }
        ]
      }
    ], 
    "Start": [
      {
        "Id": "Perm001", 
        "Field": "Field001", 
        "Type": "ReadOnly"
      }
    ], 
    "Approval": [ ]
  }
}
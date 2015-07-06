functions={
    /*NORMSINV: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "NORMSINV",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    DCONCATENATE: {
        Category: "Database",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "DCONCATENATE",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    /*TEXT: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["NUMBER", "TEXT"],
        Name: "TEXT",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    FORMAT: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "TEXT"],
        Name: "FORMAT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    CLEAN: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "CLEAN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    MIN: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MIN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    /*COUPNUM: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "COUPNUM",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 4
    },
    WEIBULL: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "WEIBULL",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },*/
    YEAR: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "YEAR",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*MID: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "NUMBER", "NUMBER"],
        Name: "MID",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    TBILLPRICE: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "TBILLPRICE",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    FVSCHEDULE: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "FVSCHEDULE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    IPMT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "IPMT",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 6
    },*/
    DATEVALUE: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["TEXT"],
        Name: "DATEVALUE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*PPMT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "PPMT",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 6
    },
    PROPER: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "PROPER",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    percentageOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "percentageOper",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    EDATE: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "EDATE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    /*SIN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SIN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    TINV: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "TINV",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    ISTEXT: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "ISTEXT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    POWER: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "POWER",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    SKEW: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SKEW",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    YEARFRAC: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "YEARFRAC",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 3
    },*/
    MINUTE: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MINUTE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*DAYSINMONTH: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DAYSINMONTH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    TAN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "TAN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    DGET: {
        Category: "Database",
        IsString: 2,
        OperandTypeList: ["TEXT"],
        Name: "DGET",
        Type: "Fetch3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    ROUNDUP: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "ROUNDUP",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    /*ISODD: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ISODD",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    ATANH: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ATANH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    ROUNDDOWN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "ROUNDDOWN",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    /*ATAN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ATAN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    FLOOR: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "FLOOR",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    /*AMORDEGRC: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "AMORDEGRC",
        Type: "Function",
        Min_Arg: 6,
        Max_Arg: 7
    },
    RADIANS: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "RADIANS",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    SIGN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SIGN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    DMIN: {
        Category: "Database",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DMIN",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    /*T: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["ANY"],
        Name: "T",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    EVAL: {
        Category: "Logical",
        IsString: 2,
        OperandTypeList: ["TEXT", "ANY"],
        Name: "EVAL",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    NPER: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "NPER",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 5
    },
    VAR: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "VAR",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },*/
    DMAX: {
        Category: "Database",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DMAX",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    /*SUBSTITUTE: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "TEXT", "TEXT", "NUMBER"],
        Name: "SUBSTITUTE",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 4
    },*/
    /*ASINH: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ASINH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    LEN: {
        Category: "Text",
        IsString: 0,
        OperandTypeList: ["TEXT"],
        Name: "LEN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*divOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "divOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    SYD: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "SYD",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },*/
    MAX: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MAX",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    MONTH: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MONTH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*YIELDMAT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "YIELDMAT",
        Type: "Function",
        Min_Arg: 5,
        Max_Arg: 6
    },
    FACTDOUBLE: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "FACTDOUBLE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    NPV: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "NPV",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },*/
    OR: {
        Category: "Logical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "OR",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    /*gtOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "gtOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    RANDBETWEEN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "RANDBETWEEN",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    CODE: {
        Category: "Text",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "CODE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    SQRTPI: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SQRTPI",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    VARPA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "VARPA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    MDURATION: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "MDURATION",
        Type: "Function",
        Min_Arg: 5,
        Max_Arg: 6
    },
    FISHERINV: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "FISHERINV",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    HYPGEOMDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "HYPGEOMDIST",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },
    TBILLEQ: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "TBILLEQ",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    LARGE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "LARGE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    DOLLARFR: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "DOLLARFR",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    PERMUT: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "PERMUT",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    STDEVPA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "STDEVPA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    ISPMT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "ISPMT",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },
    BETADIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "BETADIST",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 5
    },*/
    ROUND: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "ROUND",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    /*SEARCH: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "TEXT", "NUMBER"],
        Name: "SEARCH",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 3
    },
    PV: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "PV",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 5
    },
    TANH: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "TANH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    TRUE: {
        Category: "Logical",
        IsString: 0,
        OperandTypeList: [],
        Name: "TRUE",
        Type: "Function",
        Min_Arg: 0,
        Max_Arg: 0
    },
    /*ISBLANK: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "ISBLANK",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    NORMSDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "NORMSDIST",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    ACOS: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ACOS",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    PI: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "PI",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    TRUNC: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "TRUNC",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 2
    },
    /*COUNT: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "COUNT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },*/
    PMT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "PMT",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 5
    },
    /*BINOMDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "BINOMDIST",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },
    GCD: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "GCD",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    DSEARCH: {
        Category: "Database",
        IsString: 2,
        OperandTypeList: ["TEXT"],
        Name: "DSEARCH",
        Type: "Fetch3DFunction",
        Min_Arg: 1,
        Max_Arg: -1
    },
    VARP: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "VARP",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    DB: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "DB",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },
    DEGREES: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DEGREES",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    FISHER: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "FISHER",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    TODAY: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "TODAY",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    AND: {
        Category: "Logical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "AND",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    DSUM: {
        Category: "Database",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DSUM",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    DLOOKUP: {
        Category: "Database",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DLOOKUP",
        Type: "Fetch3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    /*INT: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "INT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    COUNTBLANK: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "COUNTBLANK",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    eqOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "eqOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    ODDLPRICE: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "ODDLPRICE",
        Type: "Function",
        Min_Arg: 7,
        Max_Arg: 8
    },*/
    WEEKNUM: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: [],
        Name: "WEEKNUM",
        Type: "Function",
        Min_Arg: 0,
        Max_Arg: 0
    },
    /*INTRATE: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "INTRATE",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },*/
    TIME: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "TIME",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    /*NOT: {
        Category: "Logical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "NOT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    LCM: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "LCM",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    DAYS360: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "DAYS360",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 3
    },
    CUMIPMT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "CUMIPMT",
        Type: "Function",
        Min_Arg: 6,
        Max_Arg: 6
    },
    MOD: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "MOD",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    RAND: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "RAND",
        Type: "",
        Min_Arg: 1,
        Max_Arg: 1
    },
    COS: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "COS",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    DOLLARDE: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "DOLLARDE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    FV: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "FV",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 5
    },
    ACCRINT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "ACCRINT",
        Type: "Function",
        Min_Arg: 5,
        Max_Arg: 7
    },*/
    SUM: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SUM",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    /*REPT: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "NUMBER"],
        Name: "REPT",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },*/
    TBILLYIELD: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "TBILLYIELD",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    /*COSH: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "COSH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    CHAR: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["NUMBER"],
        Name: "CHAR",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    ltOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "ltOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    NOMINAL: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "NOMINAL",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    DDB: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "DDB",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },
    SMALL: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "SMALL",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    LOG10: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "LOG10",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    LOG: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "LOG",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 2
    },
    DFIND: {
        Category: "Database",
        IsString: 2,
        OperandTypeList: ["TEXT"],
        Name: "DFIND",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    mulOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "mulOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },*/
    HOUR: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "HOUR",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*ODDLYIELD: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "ODDLYIELD",
        Type: "Function",
        Min_Arg: 7,
        Max_Arg: 8
    },
    MEDIAN: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MEDIAN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    REPLACE: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "NUMBER", "NUMBER", "TEXT"],
        Name: "REPLACE",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },
    powerOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "powerOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    AMORLINC: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "AMORLINC",
        Type: "Function",
        Min_Arg: 6,
        Max_Arg: 7
    },
    ISNUMBER: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "ISNUMBER",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    ODD: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ODD",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    LEFT: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "NUMBER"],
        Name: "LEFT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 2
    },
    /*TRIM: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "TRIM",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    CONCATENATE: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "CONCATENATE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    /*HARMEAN: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "HARMEAN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    RECEIVED: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "RECEIVED",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },
    DEVSQ: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DEVSQ",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    MINA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "MINA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },*/
    AVERAGE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "AVERAGE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    /*SUMSQ: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "SUMSQ",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    CEILING: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "CEILING",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    N: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "N",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    ltEqOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "ltEqOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },*/
    RIGHT: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "NUMBER"],
        Name: "RIGHT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 2
    },
    /*ACCRINTM: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "ACCRINTM",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },
    COUNTIF: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "COUNTIF",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    EVEN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "EVEN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },*/
    UPPER: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "UPPER",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*CONFIDENCE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "CONFIDENCE",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },*/
    FALSE: {
        Category: "Logical",
        IsString: 0,
        OperandTypeList: [],
        Name: "FALSE",
        Type: "Function",
        Min_Arg: 0,
        Max_Arg: 0
    },
    /*XIRR: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "XIRR",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    YIELDDISC: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "YIELDDISC",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },
    AVERAGEA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "AVERAGEA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    ATAN2: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "ATAN2",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    gtEqOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "gtEqOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    CHOOSE: {
        Category: "LookupandReference",
        IsString: 1,
        OperandTypeList: ["NUMBER", "ANY"],
        Name: "CHOOSE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },*/
    NOW: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "NOW",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*ampersandOper: {
        Category: "Operators",
        IsString: 1,
        OperandTypeList: ["TEXT", "TEXT"],
        Name: "ampersandOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    EXP: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "EXP",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    DISC: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "DISC",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 5
    },
    NORMDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "NORMDIST",
        Type: "Function",
        Min_Arg: 4,
        Max_Arg: 4
    },*/
    WEEKDAY: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "WEEKDAY",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 2
    },
    /*NEGBINOMDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "NEGBINOMDIST",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },*/
    LOWER: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT"],
        Name: "LOWER",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*SINH: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SINH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    ISLOGICAL: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "ISLOGICAL",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    notEqOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "notEqOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    WORKDAY: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "WORKDAY",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },*/
    DATE: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "DATE",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    /*PERCENTILE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "PERCENTILE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    VARA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "VARA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    POISSON: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "POISSON",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    DURATION: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "DURATION",
        Type: "Function",
        Min_Arg: 5,
        Max_Arg: 6
    },
    ISEVEN: {
        Category: "Information",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ISEVEN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    AVEDEV: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "AVEDEV",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    STANDARDIZE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "STANDARDIZE",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    QUARTILE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "QUARTILE",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    MULTINOMIAL: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MULTINOMIAL",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    EOMONTH: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "EOMONTH",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    addOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "addOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    FIND: {
        Category: "Text",
        IsString: 0,
        OperandTypeList: ["TEXT", "TEXT", "NUMBER"],
        Name: "FIND",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 3
    },
    GEOMEAN: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "GEOMEAN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    VDB: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "VDB",
        Type: "Function",
        Min_Arg: 5,
        Max_Arg: 7
    },
    MODE: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "MODE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    STDEV: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "STDEV",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },*/
    DAY: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "DAY",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*QUOTIENT: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "QUOTIENT",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    STDEVP: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "STDEVP",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    ASIN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ASIN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    COUNTA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "COUNTA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    IRR: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "IRR",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    ACOSH: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ACOSH",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    EFFECT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "EFFECT",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    VALUE: {
        Category: "Text",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "VALUE",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    STDEVA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "STDEVA",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    SLN: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "SLN",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },*/
    ABS: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "ABS",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*XNPV: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "XNPV",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: -1
    },*/
    DCOUNT: {
        Category: "Database",
        IsString: 0,
        OperandTypeList: ["TEXT"],
        Name: "DCOUNT",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    IF: {
        Category: "Logical",
        IsString: 2,
        OperandTypeList: ["NUMBER", "ANY", "ANY"],
        Name: "IF",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 3
    },
    /*NORMINV: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "NORMINV",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    CUMPRINC: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "CUMPRINC",
        Type: "Function",
        Min_Arg: 6,
        Max_Arg: 6
    },
    PRODUCT: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "PRODUCT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    EXPONDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "EXPONDIST",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    subOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "subOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    concatOper: {
        Category: "Operators",
        IsString: 0,
        OperandTypeList: ["ANY", "ANY"],
        Name: "concatOper",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },
    EXACT: {
        Category: "Text",
        IsString: 1,
        OperandTypeList: ["TEXT", "TEXT"],
        Name: "EXACT",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },*/
    SECOND: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SECOND",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    SQRT: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "SQRT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    /*PRICEMAT: {
        Category: "Financial",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER", "NUMBER"],
        Name: "PRICEMAT",
        Type: "Function",
        Min_Arg: 5,
        Max_Arg: 6
    },
    LN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "LN",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    COMBIN: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "COMBIN",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: 2
    },*/
    DCOUNTA: {
        Category: "Database",
        IsString: 0,
        OperandTypeList: ["TEXT"],
        Name: "DCOUNTA",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: -1
    },
    /*CRITERIA: {
        Category: "Database",
        IsString: 2,
        OperandTypeList: [],
        Name: "CRITERIA",
        Type: "Aggrigate3DFunction",
        Min_Arg: 0,
        Max_Arg: 0
    },
    TDIST: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "TDIST",
        Type: "Function",
        Min_Arg: 3,
        Max_Arg: 3
    },
    MAXA: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["ANY"],
        Name: "MAXA",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: -1
    },
    NETWORKDAYS: {
        Category: "DateandTime",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER", "NUMBER"],
        Name: "NETWORKDAYS",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    },
    FACT: {
        Category: "MathandTrig",
        IsString: 0,
        OperandTypeList: ["NUMBER"],
        Name: "FACT",
        Type: "Function",
        Min_Arg: 1,
        Max_Arg: 1
    },
    TRIMMEAN: {
        Category: "Statistical",
        IsString: 0,
        OperandTypeList: ["NUMBER", "NUMBER"],
        Name: "TRIMMEAN",
        Type: "Function",
        Min_Arg: 2,
        Max_Arg: -1
    }*/
}
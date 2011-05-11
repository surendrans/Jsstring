var s_ = { 
capitalize : function (val) {return val.replace(val[0], val[0].toUpperCase())},
chomp : function (val, replace) {var regex = replace ? new RegExp(replace + "$") : /\n\r|\n|\r$/; return val.replace(regex, "");}
};


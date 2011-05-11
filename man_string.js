var s_ = { 
capitalize : function (val) {return val.replace(val[0], val[0].toUpperCase())},
chomp : function (val, replace) {var regex = replace ? new RegExp(replace + "$") : /\n\r|\n|\r$/; return val.replace(regex, "");},
strip : function (val) { return val.replace(/^\s*/, '').replace(/\s*$/, ''); },
start_with : function (val,match) { var str = val.match(new RegExp("^" + match)); return  str ? true : false },
upcase : function (val) { return val.toUpperCase();},
first : function (val) { return val[0];},
last : function (val) { return val[val.length-1];}
};




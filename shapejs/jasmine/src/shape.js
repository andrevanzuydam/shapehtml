var h1, htmlelement, p, typeIsArray, typeIsObject,
  __hasProp = {}.hasOwnProperty;

typeIsArray = Array.isArray || function(value) {
  return {}.toString.call(value) === '[object Array]';
};

typeIsObject = Array.isObject || function(value) {
  return {}.toString.call(value) === '[object Object]';
};

htmlelement = (function() {
  function htmlelement() {
    var argument, _i, _len;
    this.openingtag = '';
    this.closingtag = '';
    this.content = [];
    this.attributes = [];
    this.debug = true;
    if (this.debug) {
      console.log('creating a new tag');
    }
    for (_i = 0, _len = arguments.length; _i < _len; _i++) {
      argument = arguments[_i];
      this.parse_arguments(argument);
    }
  }

  htmlelement.prototype.assign_attribute = function(newattribute) {
    if (this.debug) {
      console.log('new attribute', newattribute, {}.toString.call(newattribute));
    }
    if (typeIsObject(newattribute)) {
      if (newattribute.openingtag === void 0) {
        return this.attributes.push(newattribute);
      } else {
        return this.content.push(newattribute);
      }
    } else {
      return this.content.push(newattribute);
    }
  };

  htmlelement.prototype.parse_arguments = function(argument) {
    var attr, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = argument.length; _i < _len; _i++) {
      attr = argument[_i];
      _results.push(this.assign_attribute(attr));
    }
    return _results;
  };

  htmlelement.prototype.compile_attributes = function() {
    var aattributes, akey, attribute, avalue, _i, _len, _ref;
    if (this.debug) {
      console.log('compiling attributes with', this.attributes);
    }
    aattributes = '';
    _ref = this.attributes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      attribute = _ref[_i];
      for (akey in attribute) {
        if (!__hasProp.call(attribute, akey)) continue;
        avalue = attribute[akey];
        aattributes += ' ' + akey + '="' + avalue + '"';
      }
    }
    if (this.debug) {
      console.log('returning attribute value of ', aattributes);
    }
    if (aattributes.trim().length === 0) {
      return '';
    } else {
      return aattributes;
    }
  };

  htmlelement.prototype.compile_content = function() {
    var acontent, avalue, _i, _len, _ref;
    if (this.debug) {
      console.log('compiling content with', this.content);
    }
    acontent = '';
    _ref = this.content;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      avalue = _ref[_i];
      acontent += avalue;
    }
    if (this.debug) {
      console.log('returned content is', acontent);
    }
    return acontent;
  };

  htmlelement.prototype.compile_html = function() {
    var ahtml, attributes;
    if (this.debug) {
      console.log('calling compile_html');
    }
    attributes = this.compile_attributes(null);
    ahtml = this.openingtag.replace('[attributes]', attributes);
    ahtml += this.compile_content(null);
    ahtml += this.closingtag.replace('[attributes]', attributes);
    if (this.debug) {
      console.log('final html tag is ', ahtml);
    }
    return ahtml;
  };

  return htmlelement;

})();

htmlelement.prototype.toString = function() {
  if (this.debug) {
    console.log('calling toString');
  }
  return this.compile_html(arguments);
};

window.htmlelement = htmlelement;

p = function() {
  var aresult;
  aresult = new htmlelement(arguments);
  aresult.openingtag = '<P[attributes]>';
  aresult.closingtag = '</P>';
  return aresult;
};

window.p = p;

h1 = function() {
  var aresult;
  aresult = new htmlelement(arguments);
  aresult.openingtag = '<H1[attributes]>';
  aresult.closingtag = '</H1>';
  return aresult;
};

window.h1 = h1;

//# sourceMappingURL=shape.map
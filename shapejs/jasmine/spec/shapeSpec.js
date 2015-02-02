describe('h1', function() {
  it('should be able to return normal H1 tag', function() {
    var atest;
    atest = h1('HELLO H1 TAG');
    return expect(atest + '').toBe('<H1>HELLO H1 TAG</H1>');
  });
  return it('should be able to return an H1 tag with an attribute', function() {
    var atest;
    atest = h1({
      'style': 'color:red'
    }, 'HELLO');
    return expect(atest + '').toBe('<H1 style="color:red">HELLO</H1>');
  });
});

describe('p', function() {
  it('p \'HELLO P TAG\' should be able to return a normal P tag', function() {
    var atest;
    atest = p('HELLO P TAG');
    return expect(atest + '').toBe('<P>HELLO P TAG</P>');
  });
  it('p \'HELLO P TAG\', {"class" : "someptag", "style" : "color:blue"} should be able to return a P tag with an attribute', function() {
    var atest;
    atest = p('HELLO P TAG', {
      "class": "someptag",
      "style": "color:blue"
    });
    return expect(atest + '').toBe('<P class="someptag" style="color:blue">HELLO P TAG</P>');
  });
  it('should be able to return a P tag with an attribute and nested other tags', function() {
    var atest;
    atest = p('HELLO P TAG', {
      "class": "someptag",
      "style": "color:blue"
    }, h1('HELLO'));
    return expect(atest + '').toBe('<P class="someptag" style="color:blue">HELLO P TAG<H1>HELLO</H1></P>');
  });
  return it('should be able to return a P tag with an attribute and nested other tags and values in the correct order', function() {
    var atest;
    atest = p('HELLO P TAG', {
      "class": "someptag",
      "style": "color:blue"
    }, h1('HELLO'), 'SOME MORE TEXT', h1('OK'));
    return expect(atest + '').toBe('<P class="someptag" style="color:blue">HELLO P TAG<H1>HELLO</H1>SOME MORE TEXT<H1>OK</H1></P>');
  });
});

//# sourceMappingURL=shapeSpec.map
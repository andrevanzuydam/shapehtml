describe 'h1', () ->
  it 'should be able to return normal H1 tag', () ->
     atest = h1 'HELLO H1 TAG'   
     
     expect(atest+'').toBe '<H1>HELLO H1 TAG</H1>'
     
  it 'should be able to return an H1 tag with an attribute', () ->
    atest = h1 {'style' : 'color:red'}, 'HELLO'
    expect(atest+'').toBe '<H1 style="color:red">HELLO</H1>'
    
    
describe 'p', () ->
  it 'p \'HELLO P TAG\' should be able to return a normal P tag', () ->
    atest = p 'HELLO P TAG'    
    expect(atest+'').toBe '<P>HELLO P TAG</P>'
    
  it 'p \'HELLO P TAG\', {"class" : "someptag", "style" : "color:blue"} should be able to return a P tag with an attribute', () ->
    atest = p 'HELLO P TAG', {"class" : "someptag", "style" : "color:blue"}    
    expect(atest+'').toBe '<P class="someptag" style="color:blue">HELLO P TAG</P>'
        
  it 'should be able to return a P tag with an attribute and nested other tags', () ->
    atest = p 'HELLO P TAG', {"class" : "someptag", "style" : "color:blue"}, h1 'HELLO'    
    expect(atest+'').toBe '<P class="someptag" style="color:blue">HELLO P TAG<H1>HELLO</H1></P>'      
    
  it 'should be able to return a P tag with an attribute and nested other tags and values in the correct order', () ->
    atest = p 'HELLO P TAG', {"class" : "someptag", "style" : "color:blue"}, (h1 'HELLO'), 'SOME MORE TEXT', h1 'OK'    
    expect(atest+'').toBe '<P class="someptag" style="color:blue">HELLO P TAG<H1>HELLO</H1>SOME MORE TEXT<H1>OK</H1></P>'        
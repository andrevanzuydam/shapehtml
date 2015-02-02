#Shape library 

#Some helper functions to help determine whether attributes are of a particular type
typeIsArray = Array.isArray || ( value ) -> return {}.toString.call( value ) is '[object Array]'
typeIsObject = Array.isObject || ( value ) -> return {}.toString.call( value ) is '[object Object]'


#Make the core element from which all the tags will inherit
class htmlelement
  constructor: () ->
    @openingtag = ''
    @closingtag = ''
    @content = [];
    @attributes = [];
    @debug = true
    if @debug
      console.log 'creating a new tag'
    #An html element can be called with different argument types   
    @parse_arguments argument for argument in arguments  
  
  assign_attribute: (newattribute) ->
    if @debug  
      console.log 'new attribute', newattribute, {}.toString.call( newattribute )
    #check if we have an object which will be attributes
    if typeIsObject newattribute 
      #check to see if we are an htmlelement 
      if newattribute.openingtag is undefined   
        @attributes.push newattribute
      else
        @content.push newattribute
    #these will be probably arrays of htmlelements or values for the tag
    else 
      @content.push newattribute 
     

  #parse through the arguments
  parse_arguments: (argument) ->
    @assign_attribute attr for attr in argument
  
  
  #compile attributes for the tag in style key="value"
  compile_attributes: () ->
    if @debug  
      console.log 'compiling attributes with', @attributes
    aattributes = '';
    aattributes += ' '+akey+'="'+avalue+'"' for own akey, avalue of attribute for attribute in @attributes
    if @debug
      console.log 'returning attribute value of ', aattributes
    if aattributes.trim().length is 0
      ''
    else
      aattributes    
  
  #compile the value which must go inside the tag, it must go in the correct order!
  compile_content:  -> 
    if @debug  
      console.log 'compiling content with', @content
    acontent = ''
    acontent += avalue for avalue in @content
    if @debug  
      console.log 'returned content is', acontent
    acontent
    
  #The most important function of the lot, the compile_html function  
  compile_html: () ->
    if @debug
      console.log 'calling compile_html'
    #get the attributes to push into the opening or closing tag  
    attributes = @compile_attributes null  
    #start with the opening tag
    ahtml = @openingtag.replace '[attributes]', attributes
    ahtml += @compile_content null
    #end with the closing tag
    ahtml += @closingtag.replace '[attributes]', attributes
    if @debug  
      console.log 'final html tag is ', ahtml
    ahtml 
    
    
 
#Override the normal toString method to produce the HTML we need
htmlelement.prototype.toString = ->
    if @debug
      console.log 'calling toString'
    @compile_html arguments
    
window.htmlelement = htmlelement 

p = ->
  aresult = new htmlelement arguments
  aresult.openingtag = '<P[attributes]>'
  aresult.closingtag = '</P>'
  return aresult
  
window.p = p        
  
      
h1 = ->
  aresult = new htmlelement arguments 
  aresult.openingtag = '<H1[attributes]>'
  aresult.closingtag = '</H1>';
  return aresult
  
window.h1 = h1        
  
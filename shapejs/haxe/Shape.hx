package ;


class Shape
{
  var closingtag:String = "";
  var openingtag:String = "";  
    
  public function new( args : Array<String> ) {
    trace("Initialize the variables");
    this.openingtag = "";
    this.closingtag = "";  
  }	
   
  public function set_openingtag (stag : String) {
      this.openingtag = stag;
  }  
  
  public function set_closingtag (stag : String) {
      this.closingtag = stag;
  }  
    
  public function toString() : String {
    return "<H1>Hello World</H1>"+this.openingtag;  
  }  
    
    
    
}








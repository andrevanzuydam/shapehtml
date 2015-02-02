package ;
import haxe.macro.Expr;

/**
* @author 
 */
class Main
{
   
  function new () {
        
  }
    
  static public function main(): Void {
     
    trace ( h1 ( ["Hello World"] ) );  
  }
    
  macro static public function h1 ( args:Array<String> ) : String {
     var s = new Shape( args );
     s.set_openingtag ("<H1[attributes]>");
     s.set_closingtag ("</H1>");
      
     return  s.toString(); 
  }  
    
}
<?php 
class htmlelement {	
    
    private $openingTag = "";
    private $closingTag = "";
    private $content = [];
    private $attributes = [];
    private $debug = true;
    
    function setTags($openingTag, $closingTag) {
       $this->openingTag = $openingTag;
       $this->closingTag = $closingTag;
    }
    
    function parseArguments( $arg ) {
        if (is_object($arg)) {
           if (empty($arg->openingtag)) {
             $this->attributes[] = $arg;  
           } 
             else {
             $this->content = $arg;    
           }
        } 
          else {
           $this->content[] = $arg;      
         }
    }
    
    function __construct() {
        $args = func_get_args();
        foreach ($args as $arg) {
           $this->parseArguments ($arg); 
        } 
    }
    
    function compileHTML() {
        
    }
    
    function __toString() {
      return $this->compileHTML();  
    }
}

function h1 () {
   $args = func_get_args(); 
   $h1 = call_user_func_array(new htmlelement(), $args);
   $h1->setTags("<H1[attributes]>", "</H1>");
   return $h1;
}

echo h1 ("Hello");


?>
# shapelanguage
Shape Language for HTML generation

The shape language brings a helper library for developers who don't want to fiddle with HTML templates and who want to generate well formed HTML without leaving their favourite language.

The idea will be to have the shape library uniform across all languages so the syntax stays and looks the same.

    //PHP Example:

    $html = shape ( doctype(), 
                html( 
                   head (
                     title ("My New Website")
                   ),
                   body (
                     $h3 = h3 ("Blah Blah Blah"),
                     $p = p ("If you can see Hello World above then shape is ", b ("working"), " correctly!")
                   )
                ) 
              );

    //set some properties
    $h3->setContent ("Hello World!");
    $p->addAttribute ("style", "color:green");
    
    //echo out the html
    echo $html;
      








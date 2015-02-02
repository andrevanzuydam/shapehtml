<?php
require_once "shape.php";


$template = shape (
                doctype(), 
                html (  $head = head ( 
                          $title = title("Testing Shape")
                        ),
                        body (   $h3 = h3 ([ "style" => "color:red" ],"Hello"), 
                                $table = table (["border" => "1"])  
                             )  
                      )
           );


echo "<p> Hello </p>";

echo $p = p(["style" => "color: blue"], "Hello ", $span = span ("World!") );


$span->setContent ("Earth!");
$p->setAttribute("style", "color: red");

echo $p;

echo pre ("Testing");
$table->addContent ( tr ( td ( "OK 1"  ), td ("OK 2") ) );
$table->addContent ( tr ( td ( "OK 3"  ), td ("OK 4") ) );

echo $title->getContent();

$h3->setContent("My name is bob");

echo $h3->getAttribute("style");

$h3->setAttribute("style", "color:green");

$h3->setAttribute("width", "200px");

$li[] = li ("One");
$li[] = li ("Two");
$li[] = li ("Three");


echo table ( thead (["class" => "thead"], $thead), tbody ($tbody) , tfoot());

echo $ul = ul ( $li  );



echo $template;


echo pre ( HtmltoShape ("<ul><li>Hello<li>Test</ul>") );


echo pre ( HTMLtoShape($template) );
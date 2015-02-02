<?php

class Shape {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$GLOBALS['%s']->push("Shape::new");
		$__hx__spos = $GLOBALS['%s']->length;
		$this->openingtag = "";
		$this->closingtag = "";
		haxe_Log::trace("Initialize the variables", _hx_anonymous(array("fileName" => "Shape.hx", "lineNumber" => 9, "className" => "Shape", "methodName" => "new")));
		$this->openingtag = "";
		$this->closingtag = "";
		$GLOBALS['%s']->pop();
	}}
	public $closingtag;
	public $openingtag;
	public function toString() {
		$GLOBALS['%s']->push("Shape::toString");
		$__hx__spos = $GLOBALS['%s']->length;
		{
			$tmp = "<H1>Hello World</H1>" . _hx_string_or_null($this->openingtag);
			$GLOBALS['%s']->pop();
			return $tmp;
		}
		$GLOBALS['%s']->pop();
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->__dynamics[$m]) && is_callable($this->__dynamics[$m]))
			return call_user_func_array($this->__dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call <'.$m.'>');
	}
	function __toString() { return $this->toString(); }
}

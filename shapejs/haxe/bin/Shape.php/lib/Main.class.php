<?php

class Main {
	public function __construct(){}
	static function main() {
		$GLOBALS['%s']->push("Main::main");
		$__hx__spos = $GLOBALS['%s']->length;
		$GLOBALS['%s']->pop();
	}
	function __toString() { return 'Main'; }
}

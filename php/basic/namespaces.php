<?php

/*
 * Namespaces
 */

// This section is separate, because a namespace declaration
// must be the first statement in a file. Let's pretend that is not the case

// By default, classes exist in the global namespace, and can
// be explicitly called with a backslash.

$cls = new \MyClass();



// Set the namespace for a file
namespace My\Namespace;

class MyClass {

}

// (from another file)
$cls = new My\Namespace\MyClass;

//Or from within another namespace.
namespace My\Other\Namespace;

use My\Namespace\MyClass;

$cls = new MyClass();

// Or you can alias the namespace;

namespace My\Other\Namespace;

use My\Namespace as SomeOtherNamespace;

$cls = new SomeOtherNamespace\MyClass();


JS - The most dynamic language
```
In Java
//String a = ‘moo’
a = 1 // error in java
```

Reference: 
https://stackoverflow.com/questions/32476680/what-does-it-mean-that-javascript-is-dynamic#:~:text=JavaScript%20is%20called%20a%20dynamic,variables%20is%20determined%20at%20runtime.



Compilation vs polyfilling
```
Not all browser support JS
JS always backward compatible
As developer u want a newer version of JS, but not all browser support it
Compiler compile down to older JS – one of the compiler is called Babel.
Ex: let x = “2” -> var x = “2”

```

```
Promise() – new feature 
Need polyfill – polyfill is a new code that when you import into your project give you that feature 
Rewrite the promise and allow you to run in older browser.
```


Why we need compiler and polyfill?
```
Both compiler and polyfill allow u to use the most modern features and yet your code can then be run on all the browsers.

```

Development environment
```
Developer console
Right click -> Chrome -? Inspect
Sources tab, Click on Snippets tab

```

Primitive types
```
Number
String
Boolean
Null
Undefined
```

Non-Primitive type
```
Object

Ex: {} or new Object()

```

Typeof
```
In JS, null is a value

Typeof(1) -> number
Typeof(“a”) -> string
Practical:
Typeof(undefined) -> used for uninitialized variables
Typeof(null) -> concept of the absence of value
Typeof ({})
```

== vs ===
```
== equality
=== strict equality (check for type as well)

Try null == undefined

0 == ‘ ‘  -> true
0 == ‘0’ -> true. (diff type)
0 === ‘0’ -> false
0 === ‘ ‘ -> false
```

```
JS convert 0 to string ‘0’ to match with ‘0’

String(0)  == ‘0’

False == Boolean(‘false)
```

Does JS pass variables by reference or by value
```
Pass by primitive type like String, Boolean is by value (make a copy)
Pass by non-primitive type like object are by reference (point to the same thing in memory)
You can change the property but not change what person points to 

```

use strict
```
At the top of the file
It’s a string
Only new browser support it
In browser, the global object is the window
In node, the global object is the global
Prevent accidental globals and prevent syntax error
For example: use a variable before it’s been defined now cause an error.
Without the strict mode, a = 1 -> ok
```

Reason for using strict mode
```
Stop you from using words that are reserved for future version of JS
Example var let = 1 -> give error
Does not allow you to delete a variable/function/arguments to function

```

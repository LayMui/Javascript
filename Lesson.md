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

# String features

[![npm version](https://badge.fury.io/js/string-features.svg)](https://badge.fury.io/js/string-features)
![npm](https://img.shields.io/npm/v/string-features?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/dm/string-features?style=flat-square)
![GitHub Release Date](https://img.shields.io/github/release-date/ritesh25696/string-features?logo=semantic-release&style=flat-square)
![Maintenance](https://img.shields.io/maintenance/yes/2021?color=%237FFFD4&style=flat-square)

String-features or simptly str as the name suggests is having all the features that you will normally require while working with strings.<br>
The cleaner and readable the code the better, with this motive i've created this package which is open for changes.<br>
If you want to make any cahnges just make the changes and update README. I'll update everything and add the name to contributers list.

## Installation

1. If you want to use this library, you first need to install the Node.js.

1. When you install node.js, will also be installed npm.

1. Please run the following command.

```
npm install --save string-features
```
## Usage
```
var str = require('string-features');
```

## Examples

Following are few examples, by all means this is not an exaustive list and you can do much more with many methods available for your use.
```
str.dashCase("fooBar") // foo-bar

str.underscoreCase("BatteryAAA") // battery_aaa

str.underscoreCase("coldWind") //cold_wind

str.removeHTMLTags("<html> <body> Javascript<body> is not Java") // Javascript is not Java

str.removeSpecialCharacters("coding$%-is%& fun", true) // codingisfun

str.reverse("Hello world") // dlrow olleH

str.isEmpty("   ") //true

str.isUpperCase("Hello") //false

str.isUpperCase("HELLO") //true

str.removeExtraSpaces("     wrong   spacing       here ")) // wrong spacing here

str.count('abcabc', 'abc') // 2 
```

## Methods 

- titleCase<br>

Converts string to title case.<br>
First letter of every word is capital rest all are lower case
```
str.titleCase("title case") // Title Case
str.titleCase("TItle cAse") // Title Case
```
- toCamelCase<br>

Converts string to camel case
```
str.toCamelCase("coding-is-fun")      // codingIsFun
str.toCamelCase("coding is fun")      // codingIsFun
str.toCamelCase("coding$% is%& fun")  // codingIsFun
```

- removeSpecialCharacters

Removes special characters from string.<br>
You can also choose to remove spaces from the string by passsing second param as true default is false.
```
str.removeSpecialCharacters("coding$%-is%& fun", true)  // codingisfun
str.removeSpecialCharacters("coding$%-is%& fun", false) // codingis fun
```

- reverse<br>
Reverse the input string.

```
str.reverse("Coding") // gnidoC
```

- isEmpty<br>
Return true if the string is made up of whitespace or is null/undefined.
```
str.isEmpty("   ") //true
str.isEmpty(null)  //true
```

- isUpperCase<br>
Return true if the string is made up of all capital letters.

- isLowerCase<br>
Return true if the string is made up of all lower letters.

- isNumeric<br>
Return true if the string is made up of all numbers.
```
isNaN(123)         // false
isNaN('123')       // false
isNaN('1e10000')   // false (This translates to Infinity, which is a number)
isNaN('foo')       // true
isNaN('10px')      // true
```
- removeExtraSpaces
Removes extra spaced from string.

```
str.removeExtraSpaces(" this contains   spaces ")) // this contains spaces
```

- contains<br>
Check if string contains a substring.
```
str.contains("coding is fun", fun) // true
```
- count<br>
Returns count of sub string in string.
```
str.count('abcabc', 'abc')      // 2 
str.count("this is ice", "is")  // 2
```

- dashCase<br>
Converts string to dashed string.
```
str.dashCase("fooBar")  // foo-bar
str.dashCase("FooBar")  // -foo-bar
```

- removeHTMLTags<br>
Removed all HTML tags from a string.<br>
```
str.removeHTMLTags("<html> <body> Javascript<body> is not Java") // Javascript is not Java 
```

- underscoreCase<br>
Convert the input string to underscore case
```
 str.underscoreCase(BatteryAAA) // battery_aaa
 str.underscoreCase(coldWind)   // cold_wind
```

- endsWith<br>
Check if input string ends with given substring
```
 str.endsWith("Hello World", "World") // True
 str.endsWith("Hello#", "#")   // True
 str.endsWith("This is a test", "test") // True
 str.endsWith("This is a test", "st") // True
```
var util = require('./utils')

module.exports = {
    /**
     * Converts string to title case.
     * First letter of every word is capital rest all are lower case
     * @param str Input string
     * @returns String in title case
     */
    titleCase: function (str) {
        str = str.toLowerCase();
        var string = str.split(' ');
        for (var i = 0; i < string.length; i++) {
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }
        return string.join(' ');
    },

    /**
     * Converts string to camel case
     * coding-is-fun to codingIsFun
     * coding is fun to codingIsFun
     * coding$% is%& fun to codingIsFun
     * @param str Input string 
     * @returns String in camel case
     */
    toCamelCase: function (str) {
        let words = util.toWords(str);
        return util.toCamelCaseUtil(words);
    },

    /**
     * Removes special characters from string
     * @param str Input string
     * @param removeSpace Optional fields, true if space needs to be removed
     * @returns String with no special characters
     */
    removeSpecialCharacters: function (str, removeSpace = false) {
        return removeSpace ? str.replace(/[^a-zA-Z]/g, "") : str.replace(/[^a-zA-Z ]/g, "");
    },

    /**
     * Reverses the input string
     * @param str Input string
     * @returns Reversed string
     */
    reverse: function (str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    },

    /**
     * Return true if the string is made up of whitespace or is null/undefined
     * @param str Input string
     * @returns Boolean true or false 
     */
    isEmpty: function (str) {
        return str === null || str === undefined || str.match(/^ *$/) !== null;
    },

    /**
     * Return true if the string is made up of all capital letters
     * @param str Input string
     * @returns Boolean true or false 
     */
    isUpperCase: function (str) {
        return str === str.toUpperCase();
    },

    /**
     * Return true if the string is made up of all lower letters
     * @param str Input string
     * @returns Boolean true or false 
     */
    isLowerCase: function (str) {
        return str === str.toLowerCase();
    },

    /**
     * Return true if the string is made up of all numbers
     * isNaN(123)         // false
     * isNaN('123')       // false
     * isNaN('1e10000')   // false (This translates to Infinity, which is a number)
     * isNaN('foo')       // true
     * isNaN('10px')      // true
     * @param str Input string
     * @returns Boolean true or false 
     */
    isNumeric: function (str) {
        return !isNaN(str)
    },

    /**
     * Removes extra spaced from string
     * str.removeExtraSpaces(" this contains   spaces ")) // this contains spaces
     * @param str Input string
     * @returns String with correct spaces
     */
    removeExtraSpaces: function (str) {
        return str.replace(/\s+/g, ' ').trim();
    },

    /**
     * Check if string contains a substring
     * str.contains("coding is fun", fun) // true
     * @param str Input string
     * @param substr Input substring
     * @returns Boolean true or false
     */
    contains: function (str, substr) {
        return str.includes(substr);
    },

    /**
     * Returns count of sub string in string
     * str.count('abcabc', 'abc') // 2 
     * str.count("this is ice", "is") // 2
     * @param str Input string
     * @param substr Input substring
     * @returns Number of occurrences of substr in str
     */
    count: function (str, substr) {
        count = 0,
            pos = str.indexOf(substr);
        while (pos > -1) {
            ++count;
            pos = str.indexOf(substr, ++pos);
        }
        return count;
    },

    /**
     * Converts string to dashed string
     * str.dashCase("fooBar") // foo-bar
     * str.dashCase("FooBar") // -foo-bar
     * @param str Input string
     * @returns dashed case string
     */
    dashCase: function (str) {
        return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    },

    /**
     * Removed all HTML tags from a string
     * str.removeHTMLTags("<html> <body> Javascript<body> is not Java") // Javascript is not Java 
     * @param str Input string
     * @returns HTML tag free string
     */
    removeHTMLTags: function (str) {
        return str.replace(/(<([^>]+)>)/ig, '');
    },

    /**
     * Convert the input string to underscore case
     * BatteryAAA to battery_aaa
     * coldWind to cold_wind
     * @param str Input string
     * @returns underscore case string
     */
    underscoreCase: function (str) {
        return (str.replace(/\.?([A-Z]+)/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, ""));
    }

}

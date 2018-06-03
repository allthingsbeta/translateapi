// This module makes use of Chaining Pattern in JS.
// Each of the methods can be chained one after another to complete the
// Business logic

//var config = require('./../config/config.js') // Enable only when you Configure & Apply api Translation logic

var input = require('./../input/input.json') // Initial Template for Translate
var util = require('./../common/common_utilities.js') // Initial Template for Translate

var translate = function () {

    this.lang = "en"; // default.
    this.result = {}; // Holds the results.


    // Set The Language to be translated to.
    this.TranslateToLanguage = function (expectedLang) {
        this.lang = expectedLang;
        return this;
    }

    this.GetLanguage = function () {
        return this.lang;
    }


    // Core Function..
    // Makes a Copy of the Input Sample available under input/input.json
    // loops through

    this.translate = function () {
        var input_obj = input; // Make a copy of input, which should have one array with key as 'texts' havin a sinlge key pair value
        // The logic is tied to the above assumption..
        input_obj.texts.map(obj => {
            for (var key in obj) {
                obj[key] = PerformTranslation(obj[key]) // Actual Translation
            }
        });

        //this.result = ChangeLang(input_obj, this.GetLanguage()); // Not Needed any more.
        this.result = ChangeProp(input_obj, this.GetLanguage() ,'lang');// Apply immutability & Change language as necessary

        // Changed Value attribute is dummy
        this.result = ChangeProp(input_obj, 'Yes','ChangedValue'); // Apply immutability & Change language as necessary

        //this.saveOutput(); // Call the save method to write the file to the output folder.
        return this;
    }


    //Apply translation Logic here.
    PerformTranslation = function (str) {
        // Here make the translation API call, Pass Str and target language.
        // Configure the APIs in the config
        return str + '00'; // Some dummy logic applied here
    }


    // Display translation results here.
    this.translationResults = function () {
        console.log(`Here are your final results ${JSON.stringify(this.result)}`);
        return this;
    }

    // Writes the results to a file.
    this.saveOutput = function () {
        var path = require('path');
        filePath = path.join(__dirname, './../output/');

        // Make use of the custom utilities code.
        util.writetofile(filePath + 'output.json',  JSON.stringify(this.result));
        return this;
    }


    // Dummy Method just to change one Attribute.
    ChangeLang = (input_obj, newLang) => Object.assign({}, input_obj, {
        lang: newLang
    });

    // Actual Method  to change any Attribute in the object..
    ChangeProp = (input_obj, newvalue, key) => Object.assign({}, input_obj, {
        [key] : newvalue
    });


}


module.exports.translate = translate;
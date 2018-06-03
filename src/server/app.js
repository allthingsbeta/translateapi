var config = require('./config/config.js')
var TranslateModule = require('./translate/translate_chaining.js').translate;
console.clear();


var express = require('express'),
    app = express();

app.listen(config.PORT, function (req, res) {
    console.log('Spinning');
});;



//Option 1 - Limited Chaining Works as well !!
// var translateToES = new TranslateModule().TranslateToLanguage('es').translate();
// translateToES.saveOutput();


// Option 2 -- Complete Chaining.
var translateToES = new TranslateModule().TranslateToLanguage('es').translate().saveOutput();;


// Option 3 - No Chaining
// var translateToES = new TranslateModule()
// translateToES.TranslateToLanguage('es');
// translateToES.translate();
// translateToES.saveOutput();



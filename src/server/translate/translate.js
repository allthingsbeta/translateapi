var input = require('./../input/input.json');

module.exports = {

    TranslateToLanguage(inputlang) {
        var obj = {};
        obj.lang = inputlang;
        return obj;
    },

    GetLanguage(obj){
        return obj.lang;
    }

}



// define the dictionary
$.i18n().load( {
    'fr' : {
      'disableButtonText' : 'désactiver',
    },
    'en': {
      'disableButtonText' : 'disable',
    }
})

// set the locale
$.i18n( {
    locale: 'fr'
    //locale : navigator.language
} );

//console.log($.i18n('key'))
const date = new Date();
document.querySelector('#date').innerText = date.toLocaleDateString($.i18n().locale);

let model1 = new ModelInteger();
let model2 = new ModelInteger();

let controler1 = new Controller(model1);
//let controler2 = new SuperController(model1, model2);

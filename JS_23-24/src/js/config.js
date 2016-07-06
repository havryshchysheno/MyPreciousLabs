requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery',
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require (
  [
      'model',
      'jquery',
      'tmpl',
      'view',
      'controller'
  ],
    function (model, $, tmpl, view, controller) {

    }
);
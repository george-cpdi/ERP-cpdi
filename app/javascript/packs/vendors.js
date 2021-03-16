document.addEventListener("turbolinks:load", function() {

  var options = {
  	url: function(phrase) {
      return "/dashboard/vendor/search.json?q=" + phrase;
    },
    getValue: "name"
  };

  $('*[data-behavior="autocomplete-vendors"]').easyAutocomplete(options);
});
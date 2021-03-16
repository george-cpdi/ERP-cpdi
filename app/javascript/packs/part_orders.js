document.addEventListener("turbolinks:load", function() {
	console.log('test test')
  var options = {
  	url: function(phrase) {
      return "/dashboard/part_order/search.json?q=" + phrase;
    },
    getValue: function(element) {
        return element.name;
    },
    list: {
        onSelectItemEvent: function() {
        	var selectedItemValue = $("#part_order_part_name").getSelectedItemData().description;
            $("#part_order_part_description").val(selectedItemValue);
        }
    }
  };

  var vendor_options = {
  	url: function(phrase) {
      return "/dashboard/part_order/search_vendor.json?q=" + phrase;
    },
    getValue: function(element) {
        return element.name;
    },
    list: {
        onSelectItemEvent: function() {
        	var contact_person = $("#part_order_vendor").getSelectedItemData().contact_person;
        	var address = $("#part_order_vendor").getSelectedItemData().address;
            $("#part_order_vendor_contact").val(contact_person);
            $("#part_order_vendor_address").val(address);
        }
    }
  };

  $('*[data-behavior="autocomplete-parts"]').easyAutocomplete(options);
  $('*[data-behavior="autocomplete-order-vendors"]').easyAutocomplete(vendor_options);
});
 jQuery.fn.filterByText = function () {
  //loop all selected elements
    $.each(this,function (i,e) {
     var $selectBx = $(e);
	 //create out inputbox
	 var textInput = $('<input style="position: absolute;" type="text">')
	  //get all options and store
	  var dOptions = [];
	  $selectBx.find('option').each(function () {
                dOptions.push({value: $(this).val(), text: $(this).text()});
      });
	  //store as data option
	  $selectBx.data('dOptions', dOptions);
	  //on keychange update
	   $(textInput).bind('change keyup', function () {
			//regex search and show only
			var search = $(this).val().trim();
			//get options and clear
		    var dOptions = $(selectBx).empty().data('dOptions');
                var regex = new RegExp(search, "gi");
                $.each(dOptions, function (i) {
                    var option = options[i];
                    if (option.text.test(regex)) {
                        $(selectBx).append(
                            $('<option>').text(option.text).val(option.value)
                        );
                    }
                });
	   });
    })
 });

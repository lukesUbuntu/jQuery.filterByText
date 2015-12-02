 jQuery.fn.filterByText = function () {
  //loop all selected elements
    $.each(this,function (i,e) {
     var $selectBx = $(e);
	  //get all options and store
	  var dOptions = [];
	  $selectBx.find('option').each(function () {
                dOptions.push({value: $(this).val(), text: $(this).text()});
      });
	  //store as data option
	  $selectBx.data('dOptions', dOptions);
    })
 });

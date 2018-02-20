$(document).ready(function() {
  $('#form-container form').submit(function(event) {
    var pets = parseInt($('input#pets').val());
    var gender = $('select#desired-gender').val();

event.preventDefault();
  });

});

$(document).ready(function(){

$("#boxx").on('keypress change', function(event) {
    var data=$(this).val();
    $("div").text(data);
});
});
$(document).ready(function() {
    
 $.get("hello.txt", function(data, status) {
    alert(status);
    $("#corp-name").html(data);
    alert(status);
   });
});

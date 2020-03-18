$(document).ready(function(){
    console.log("inside");
    $("div.gistify").each(function(){
        //do whatever
        //$(this).load("new.html");
        console.log("data");
        var url = $(this).attr("data-url");
        $(this).load(url);
    });
 
});
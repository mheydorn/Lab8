
$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
	var url = "comment";
	$.ajax({
  	url:url,
  	type: "POST",
  	data: jobj,
  	contentType: "application/json; charset=utf-8",
  	success: function(data,textStatus) {
      		$("#done").html(textStatus);
  	}
	});
	 });

      $("#searchButton").click(function() {
      $.getJSON('search',{q: $("#Search").val()},function(data){
	console.log(data);
	var allthat = "<ul>";
	for(var i in data){
	 com = data[i];
	 allthat += "<li>Name: " + com.Name + " --Comment: " + com.Comment + "</li>";
	}
      allthat += "</ul>";
      $("#searchdiv").html(allthat);
      })
     })

      $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
});


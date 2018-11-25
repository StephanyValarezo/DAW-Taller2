$(document).ready(function(){
  
	search(texto);
  $("button").click(function(){
    var texto = $('input#buscador');
    alert("hola");
	});
	
});

function search(texto) {
	$.ajax({
    type: "GET",
    url: "https://twitrss.me/twitter_search_to_rss/?term="+texto,
    dataType: "xml",
    success: function(xml){
    $(xml).find('item').each(function(){
      var sTitle = $(this).find('Title').text();
      var sPublisher = $(this).find('description').text();
      $("<li></li>").html(sTitle + ", " + sPublisher).appendTo("#dvContent");
    });
	},
	error: function() {
		alert("An error occurred while processing XML file.");
	}
  });
};




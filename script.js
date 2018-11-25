function addNew(usuario, contenido, link, imagen, fecha) {
   //var Nomusuario = $("<h5/>", {
   //   "class":"card-title",
   //   html: usuario
   // })

    var Nomusuario = $("<p/>",{
      "class": "card-text", "id":"usuario",
      html: usuario
    })

    var logo = $("<a/>",{
      "href": "#", "class" : "fab fa-twitter", "id":"logo",
      
    })


//<a href="#"><i class="fab fa-twitter"></i></a>
    var p = $("<p/>",{
      "class": "card-text", "id":"contenido",
      html: '"'+ contenido + '"'
    })

    var enlace = $("<a/>",{
      "href": link, "id":"enlace1",
      html: link
    })

    var foto = $("<p/>",{
      "class": "card-text", "id" : "imagen",
      html: imagen
    })

    var tiempo = $("<p/>",{
      "class": "card-text", "id" : "tiempo",
      html: fecha
    })


    var barra = $("<hr/>",{
      "class": "my-4",
      
    })
//<hr class="my-4">
    var div = $( "<div/>", {
      "class": "card-body col-11", 
    });
    
    
    logo.appendTo(div)
    Nomusuario.appendTo(div)
    p.appendTo(div)
    enlace.appendTo(div)
    foto.appendTo(div)
    tiempo.appendTo(div)
    barra.appendTo(div)
    div.appendTo( "#dvContent");
    
}

function addPalabra(palabra) {
   var lapalabra = $("<h5/>", {
      "class":"card-title", "id":"palabra",
      html: palabra
    })
    
    lapalabra.appendTo(div)
    div.appendTo( "#palabra" );
}




function loadNewsXml(texto) {
  $.ajax({
      type: "GET",
      url: "https://twitrss.me/twitter_search_to_rss/?term="+texto,
      dataType: "xml",
      success: function(xml){
          $(xml).find('item').each(function(){
            var usuario= $(this).find('dc\\:creator, creator').text();
            var contenido = $(this).find('description').text();
            var link= $(this).find('link').text();
            var imagen= $(this).find('img').text();
            var fecha= $(this).find('pubDate').text();

            usuario=usuario.slice(2,-1)
            fecha=fecha.slice(0,26)
            
            addNew(usuario, contenido, link, imagen, fecha)

            });
      },
      error: function() {
        alert("Error al procesar el xml");
      }
  });
}

//Sun, 25 Nov 2018 00:38:03 +0000


//addNew(usuario, contenido, link, imagen, fecha)



$(document).ready(function(){
  loadNewsXml("cat");  
 
  $("#boton").click(function(){
        texto2 = $('input#buscador');
        loadNewsXml(texto2);
        $(this).show();

        //addPalabra(texto2);
        
      });


  
});

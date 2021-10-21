// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){


   $('aside#menu-moviles').css('left','-290');
   $('#cerrar-menu').hide();


    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            left: 0
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        $('header,main,footer'). animate({
            left: 290,
            opacity: 0.15
        },500,'easeOutExpo');



        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            left: -290
        },1000,'easeOutElastic');
        
        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        $('header,main,footer'). animate({
            left: 0,
            opacity: 1
        },500,'easeOutExpo');

        event.preventDefault();
    });
    

   

   /*activador slick slider*/
    $('.slick-inicio').slick({     
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:true,
     arrows: true,
     dots:true,
     autoplaySpeed:1100,
     speed:400,
     fade:true,
     infinite:true

  

  });

});
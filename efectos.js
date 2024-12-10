//---Efecto Menú----

$(document).ready(function(){
    $('.menu a').each(function(index, elemneto){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

//---Efecto Header----
if( $(window).width() > 800 ) {
     $('header .textos').css ({
        opacity:0,
        marginTop:0
     });
     
     $('header .textos').animate ({
        opacity:1,
        marginTop: '-52px'
     }, 1500);

}

//--- Scroll Elementos Menu ----
 var acercaDe  = $('#acerca-de').offset().top,
     menu      = $('#platillos').offset().top,
     galeria   = $('#galeria').offset().top,
     ubicacion = $('#ubicacion').offset().top;
//Acerca de---
     $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#acerca-de').offset().top
        },500);
     });    
//Menu---
 $('#btn-menu').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:  $('#platillos').offset().top
    },500);
 });

 //Galeria---
 $('#btn-galeria').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#galeria').offset().top
    },500);
 });

 //Ubicacion---
 $('#btn-ubicacion').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#ubicacion').offset().top
    },500);
 });


});
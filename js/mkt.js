$(document).ready(function(){
    
  //scroll elementos del menú
    var servicios  = $('#servicios').offset().top
    var citas   = $('#citas').offset().top
    var sobreMi = $('#sobreMi').offset().top;
    
    $('#btn-servicios').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios 
        }, 500);
    });
    
    
   $('#btn-citas').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: citas 
        }, 500);
    });
    
     
    $('#btn-Smi').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: sobreMi 
        }, 500);
    });
    
    //scroll elementos del footer
    var logoFooter = $('#header').offset().top
    var portfolio = $('#servicios').offset().top
    var citasFotter = $('#citas').offset().top
    var sobremi = $('#sobreMi').offset().top;
    
     $('#logofooterEnlace').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: logoFooter
        }, 500);
    });
    
    $('#citasFooter').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: citasFotter
        }, 500);
    });
    
     $('#portfolio').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: portfolio
        }, 500);
    });
    
    $('#sobreMiFooter').on('click', function(e){
            e.preventDefault();
        $('html, body').animate({
            scrollTop: sobremi
        }, 500);
    });
    
    
//efectos carrousel
    const grande = document.querySelector('.grande')
    const punto  = document.querySelectorAll('.punto')
    
    punto.forEach( ( cadaPunto , i )=>{
        punto[i].addEventListener('click',()=>{
            let posicion  = i
            let operacion = posicion * -51
            
            grande.style.transform = `translateX(${ operacion }%)`
            
            punto.forEach( ( cadaPunto , i )=>{
                 punto[i].classList.remove('activo')
        })
            
         punto[i].classList.add('activo')

         })
    })
    

//efectos carrousel 2
    
    const grande2 = document.querySelector('.grande2')
    const punto2  = document.querySelectorAll('.punto2')
    
    punto2.forEach( ( cadaPunto , i )=>{
        punto2[i].addEventListener('click',()=>{
            let posicion  = i
            let operacion = posicion * -51
            
            grande2.style.transform = `translateX(${ operacion }%)`
            
            punto2.forEach( ( cadaPunto , i )=>{
                 punto2[i].classList.remove('activo')
        })
            
         punto2[i].classList.add('activo')

         })
    })  
    
    const button = document.querySelector('.button')
    const nav    = document.querySelector('.btn-menu')

    button.addEventListener('click',()=>{
        nav.classList.toggle('activo')
    })

});
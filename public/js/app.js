"use strict";
(function($){

    // brilho
    function Brilho(canvas, w, h){
        console.log(w);
        let cW = canvas.width = w;
        let cH = canvas.height = h;
        let ctx = canvas.getContext('2d');

        // imagens
        let bg = document.getElementById('dourado');
        let brilho = document.getElementById('shiny');

        let position = {x: 0, y: 0};
        let vel = {x:6, y:0};

        function desenhar(){
            //console.log('desenhar');
            ctx.clearRect(0,0, cW, cH);
            ctx.drawImage(bg,0,0, cW, 1);
            ctx.drawImage(brilho,position.x,position.y, 200, 1);
            position.x += vel.x;
            requestAnimationFrame(desenhar)

            if(position.x > cW * 1.7){
                position.x = 0;
            }
            

        }
        desenhar();
    }


    //slick
    $('#c-banner').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 7000,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<img src="img/seta-cat-right.png" class="seta-right" />"',
		prevArrow: '<img src="img/seta-cat-left.png" class="seta-left" />"',
      });

    //slick
    $('#bannerDep').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#navdep'
      });
    
    $('#navdep').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#bannerDep',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        nextArrow: '<img src="img/seta-cat-right.png" class="seta-right" />"',
        prevArrow: '<img src="img/seta-cat-left.png" class="seta-left" />"', 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]       
    });


    $('.goesTo, .link-footer').on('click', function (event) {
        console.log(this);
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000, 'swing');

        // Outras AnimaÃ§Ãµes
        // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

    });

    function mostrarIrTopo(e){

        let btn = $('#ir-topo');
        let posY = e.currentTarget.scrollY
        if(posY > 800){
            $(btn).fadeIn(200);
        }
        else{
            $(btn).fadeOut(200);
        }
    }

    function menuLeort(e){
        var header = $('#topo');
        let posY = e.currentTarget.scrollY
        if(posY > 400){
            $(header).addClass('pos-fixed');
        }
        else{
            $(header).removeClass('pos-fixed');
        }
    }

    window.addEventListener('scroll', function(e){
        menuLeort(e);
        mostrarIrTopo(e);
    });

    $('.fechar-menu').on('click', function(){
        $('#menu-mob-flutuante').fadeOut(200);
    });

    $('.menu-mob').on('click', function(){
        $('#menu-mob-flutuante').fadeIn(200);
    })

    $('.link-topo').on('click', function(){
        $('.link-topo').removeClass('ativo');
        $(this).addClass('ativo');
        $('#menu-mob-flutuante').fadeOut(200);
    })

    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200);
        Brilho(document.getElementById('brilho'), $('.line-gold').width(), 1);
    })


})($)
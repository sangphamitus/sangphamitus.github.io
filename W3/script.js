
$(document).ready(function(){
   
    //let change=false;
    $('.nav-button').click(function() {
        
        $('.nav-button').toggleClass('change');
        // if(change==false)
        // {document.body.style.position = position;
        
        // change =true;}
        // else{
        //     document.body.style.position = '';
        //     document.body.style.top = '';
        //     change =false;
        // }
        
        document.body.classList.toggle('lock-scroll');

     });
     $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        // console.log(position);
       
        if (position >= 650 ) {
            $('.camera-img').addClass('flyInFromLeft');
            $('.mission-text').addClass('flyInFromRight');
        } else {
            $('.camera-img').removeClass('flyInFromLeft');
            $('.mission-text').removeClass('flyInFromRight');
        }
    });
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });
    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 4330) {
            $('.card-1').addClass('cardMoveFromLeft');
            $('.card-2').addClass('cardMoveFromBottom');
            $('.card-3').addClass('cardMoveFromRight');
        } else {
            $('.card-1').removeClass('cardMoveFromLeft');
            $('.card-2').removeClass('cardMoveFromBottom');
            $('.card-3').removeClass('cardMoveFromRight');
        }
    });

});
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
            $(target).addClass('padding-top');
            html_body.animate({
                scrollTop: target.offset().top-0
            }, 1500);

            return false;
        }
    }
});
$('footer a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
            $(target).addClass('padding-top');
            html_body.animate({
                scrollTop: target.offset().top-0
            }, 1500);

            return false;
        }
    }


// active navbar
var sections = $('section');
var nav = $('nav');
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height;
        var bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('nav-active');
            sections.removeClass('nav-active');

            $(this).addClass('nav-active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav-active');
        }

        if (cur_pos === 0) {
            nav.find('a').removeClass('nav-active');
            sections.removeClass('nav-active');

            $('#home').addClass('nav-active');
            nav.find('a[href="#home"]').addClass('nav-active');
        }
    });
   
});


$('.footer-link').click(function () {
    $('.footer-link').toggleClass('change');
  });
});
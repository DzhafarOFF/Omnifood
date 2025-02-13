$(document).ready(function(){

    $('.js--section-features').waypoint(function(direction){
        if (direction =="down") {
            $('nav').addClass('sticky');
        }  else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '100px;'
    });

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
    });

$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icn = $('.js--nav-icon i')
        nav.slideToggle(200);

        if(icn.hasClass('ion-ios-menu')){
            icn.addClass('ion-ios-close');
            icn.removeClass('ion-ios-menu');
        }   else {
            icn.addClass('ion-ios-menu');
            icn.removeClass('ion-ios-close');
        }

    })

});

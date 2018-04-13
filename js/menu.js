jQuery("document").ready(function($){
    
    var heightHeader=$('#header').outerHeight();
    var heightLatter=$('#latter').outerHeight();
    var heightMenu=$('#mainMenu').outerHeight();
    var heightAdvantages=$('#advantages').outerHeight();
   
     
    $(window).scroll(function () {
        if ((heightHeader+heightLatter+heightMenu+heightAdvantages)<$(this).scrollTop()) {
            $('#mainMenu').css({
                'position':'fixed',
                    'top':'0',
                'width': $('body').outerWidth()});
             } else {
              $('#mainMenu').css({
                'position':'',
                'width':''});
        }
    });
  
});
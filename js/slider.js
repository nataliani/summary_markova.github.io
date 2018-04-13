var slideNow = 1;
var slideCount = $('#slidewrapper').children.length+1;
var translateWidth = 0;
var slideInterval = 4000;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css({
        'transform': 'translate(0, 0)'});     
        slideNow = 1;
    } else {
        translateWidth = -$('.slide').width() * (slideNow);
    
         $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
        $('#'+slideNow).prop('checked', true);
};


$(document).ready(function () {
    $('#'+slideNow).prop('checked', true);
    var switchInterval=setInterval(nextSlide, slideInterval);
    $('#slidewrapper').hover(function(){
        clearInterval(switchInterval);
            },function() {
                            switchInterval = setInterval(nextSlide, slideInterval);
                        });
    var navBtnId = 0;
  
    $('.navigation').click(function() {
        navBtnId = $(this).index();
         if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.slide').width() * (navBtnId);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
            slideNow = navBtnId + 1;
        };
    });
    
});

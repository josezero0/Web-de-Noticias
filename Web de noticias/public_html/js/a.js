$(document).ready(function () {
    $('.body').scroll(function(){
        if($('.body').scrollTop() > $('#header').outerHeight()){
            $('.navbar').addClass('affix');
        }else{
            $('.navbar').removeClass('affix');
        }
    });
});
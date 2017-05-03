$(document).ready(function () {
    var offset = $('#nav-container').offset().top -15;
    console.log(offset);
    $('#pag').scroll(function(){
        console.log($('#pag').scrollTop());
        if($('#pag').scrollTop()>=offset){
            $('#nav-container').addClass('affix');
        }else{
            $('#nav-container').removeClass('affix');
        }
    });
});
$(document).ready(function () {
    $(window).scroll(function(){
       if($(window).scrollTop() > 0) {
           $('header').addClass('scroll');
       }else{
           $('header').removeClass('scroll');
       }
    });

    $('.header .btn_menu').click(function(){
        $('.header .menu').toggleClass('open');
    });

    $('.header .menu').blur(function(){
        $(this).removeClass('open');
    });

    $('.item_comment .btn_report_more').click(function(){
        console.log('1');
        $(this).parent().find('.list_comment').slideToggle('fast');
        return false;
    });

    $('.pop_wrap .pop_mask').click(function(){
        $('.pop_wrap').hide();
    });
});

function pop_show(id){
    $('#'+ id).show();
}

function pop_hide(id){
    $('#'+ id).hide();
}
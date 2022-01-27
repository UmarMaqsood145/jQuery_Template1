// Hamburger

$(document).ready(function(){

    $('.openMenu').click(function(){
        $('.items').css('right','0');
    });
    $('.closeMenu').click(function(){
        $('.items').css('right','-100%');
    });

    $('#login').click(function(){
        $('#modal').css('top' , '18%');
    });
    $('#close').click(function(){
        $('#modal').css('top' , '-85%');
    });

    $('#signup').click(function(){
        $('#modal-1').css('top' , '18%');
    });
    $('#close-1').click(function(){
        $('#modal-1').css('top' , '-85%');
    });

});
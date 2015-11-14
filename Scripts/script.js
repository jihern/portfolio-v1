$(document).ready(function () {
    $('#text-full').hide();    
    $('#text-cafe').hide();  
    $('#text-smart').hide();
    $('#text-100').hide();     
    $('#text-personal').hide();       

    $('.image-wrapper1').hover(function () {
        $('.image-wrapper1 #fulldive-link #Fulldive').stop().animate({
            opacity: .2
        }, 200);
        $('#text-full').show().delay(200);    
    }, function () {
        $('.image-wrapper1 #fulldive-link #Fulldive').stop().animate({
            opacity: 1
        }, 200);
        $('#text-full').hide().delay(200);    
    });

    $('.image-wrapper2').hover(function () {
        $('.image-wrapper2 #CafeHop-link #CafeHop').stop().animate({
            opacity: .2
        }, 200);
        $('#text-cafe').show().delay(200);    
    }, function () {
        $('.image-wrapper2 #CafeHop-link #CafeHop').stop().animate({
            opacity: 1
        }, 200);
        $('#text-cafe').hide().delay(200);    
    });

    $('.image-wrapper3').hover(function () {
        $('.image-wrapper3 #SmartShelf-link #SmartShelf').stop().animate({
            opacity: .2
        }, 200);
        $('#text-smart').show().delay(200);    
    }, function () {
        $('.image-wrapper3 #SmartShelf-link #SmartShelf').stop().animate({
            opacity: 1
        }, 200);
        $('#text-smart').hide().delay(200);    
    });

    $('.image-wrapper4').hover(function () {
        $('.image-wrapper4 #100day-link #100day').stop().animate({
            opacity: .2
        }, 200);
        $('#text-100').show().delay(200);    
    }, function () {
        $('.image-wrapper4 #100day-link #100day').stop().animate({
            opacity: 1
        }, 200);
        $('#text-100').hide().delay(200);    
    });

    $('.image-wrapper5').hover(function () {
        $('.image-wrapper5 #personal-link #personal').stop().animate({
            opacity: .2
        }, 200);
        $('#text-personal').show().delay(200);    
    }, function () {
        $('.image-wrapper5 #personal-link #personal').stop().animate({
            opacity: 1
        }, 200);
        $('#text-personal').hide().delay(200);    
    });
});
$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', 'https://puu.sh/vBRM4/11845608e4.jpg').load(function(){
        $('body').append($(this));
    });
    
        $('<img/>').hide().attr('src', 'https://puu.sh/vBRvv/32ee253263.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'https://puu.sh/vBRid/3e89181f00.jpg').load(function(){
        $('body').append($(this));
    });


   // Background Changer 
    $('#s1').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBRM4/11845608e4.jpg")');
    }, function() {
        $('body').css('background', '');

    });
    
    $('#s2').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBRid/3e89181f00.jpg")');
    }, function() {
        $('body').css('background', '');

    });

    $('#s3').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBRvv/32ee253263.jpg")');
    }, function() {
        $('body').css('background', '');

    });

});

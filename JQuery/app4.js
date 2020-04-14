$().ready(function () {

    // // *

    // console.log($('*'));
    // var elementCount = $('*').css('border', '3px solid red').length;
    // $('body').prepend('<h3>'+elementCount+'elements found</h3>')

    //class
    $('.myClass').css('border', '3px solid red');

    // element
    $('div').css('border','5px solid blue' );

    //id
    $('#mySpan').css('border', '4px solid green');

    //select
    $('div, span').css('background-color','red');
})
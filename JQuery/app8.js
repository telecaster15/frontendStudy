// eq()

// $().ready(function () {
//     $('td:eq(2)').css('color','red');
//
//     $('ul.nav:eq(1)').css('backgroundColor','green')
//
//     $('ul.nav').each(function (index) {
//         $(this).find("li:eq(1)").css('color','#eeee');
//     })
//
//     $('ul.nav li:nth-child(3)').css('color','darkblue');
//
//     $('li:eq(-2)').addClass('foo');
// })


// gt()
$().ready(function () {
$('td:gt(4)').css('backgroundColor','yellow') // 4보다 큼

})

//header()
$().ready(function () {
    $(':header').css({background:'#ccc', color:'skyblue'});
})




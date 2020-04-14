//JQuery

$('h1').text('Hello');

const p = '<p id="test">My <em>new</em>  text </p>'; 
$(p).appendTo('body');

$('div.foo').click(function(){
    $(this).slideUp();
});

// $(document).ready(function(){
//     //
// });
$().ready(function(){
    $('h1').text('hello world');
});


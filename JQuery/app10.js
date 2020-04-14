
// [attribute='value']
$().ready(function () {
    $('input[value="Hot Fuzz"]').next().text("Hot Fuzz");
})

//nth-of-type() : 1부터
$('span:nth-of-type(2)').append('<span> is 2nd sibling span</span>').addClass('nth');
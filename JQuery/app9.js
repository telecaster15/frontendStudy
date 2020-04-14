// not()
$().ready(function () {

$('input:not(:checked)+span').css('backgroundColor','yellow');
$('input').attr('disabled','disabled');//

$('input:not(:checked)').attr('checked', 'checked');
})


$(). ready(function () {

    //parent > child
    $('ul.topnav > li').css('border','3px solid red');

    //prev + next
    $('label + input').css('color','blue').value('Laveled');
})
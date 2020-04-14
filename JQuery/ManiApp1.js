
// Manipulation

// append() : 선택 요소의 닫는 태그 앞 콘텐츠 삽입
// prepend() : 선택 요소의 여는 태그 뒤 콘텐츠 삽입
// after() : 선택 요소의 뒤에 콘텐츠를 삽입한다.
// before() : 선택 요소의 앞에 콘텐츠를 삽입한다.
$().ready(function () {
    var price = $('<p>From $399.99</p>');
    // $('.vacation').append(price);
    // $('.vacation').prepend(price);
    $('.vacation').after(price);

    // Removing
    $('button').on('click',function (e) {
        $('button').remove();
    })

})



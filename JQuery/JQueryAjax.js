// Ajax with JQuery

// $.ajax({
//     url:'../JSON/test.json',
//     cache:false
// })
// .done(function (data, textStatus, jqXHR) {
//
//     var data =data.employee;
//
//     var content = ""
//
//     for (var i=0; i<data.length; i++ ) {
//         content += "<li>"
//         content += data[i].first_name + " " + data[i].last_name;
//         content += "</li>"
//
//     }
//     $('#content').html(content);
// })
// .fail(function (jqXHR, textStatus, errorThrown) {
//     console.log("fail : ", jqXHR);
// })
// .always(function (data, textStatus, jqXHR) {
//     console.log("always : ", data);
// });

$.getJSON('/JSON/test.json', function (data) {

    console.log(typeof data)
})
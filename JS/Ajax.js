// Ajax : XMLHttpRequest

const xhr= new XMLHttpRequest();
xhr.open('GET', '../JSON/test.json');
xhr.send();
xhr.onreadystatechange = function(e){
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
        var response = xhr.responseText;
        console.log(response);
        var o = JSON.parse(response);
        var data =o.employee;

        var content = ""

        for (var i=0; i<data.length; i++ ) {
            content += "<li>"
            content += data[i].first_name + " " + data[i].last_name;
            content += "</li>"

        }

        document.querySelector('#content').innerHTML = content;


    }else{
        console.log("error")
    }
}

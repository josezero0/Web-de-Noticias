var json = ["data/1.json", "data/2.json"];
var count = 0;

$(document).ready(function () {
    $('#load').click(function () {
        loadJSON();
    });
    $('.body').scroll(function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            loadJSON();
        }
    });
});

function loadJSON() {
    if (count >= json.length) {
        //alert("No more news");
    } else {
        $.getJSON(json[count].toString(), function (jsonObject) {
            createData(jsonObject);
        });
    }
}

function createData(jsonObject) {
    $.each(jsonObject, function (i, noticia) {
        var thumbnail = $('<div>', {class: "container-fluid thumbnail text-justify"});
        var imgprev = $('<div>', {class: "imgprev"});
        var img = $('<img>',{src: noticia.imgmid, alt: "otro", class: "img-responsive"});
        var caption = $('<div>', {class: "caption"});
        var title = $('<h3>', {text: noticia.title});
        title.append($('<br>'));
        title.append($('<small>', {text: noticia.datetime}));
        title.appendTo(caption);
        //caption.append($('<p>', {text: noticia.description}));
        caption.append(noticia.description);
        caption.append("<div class='text-center'><a class='btn btn-primary'>Leer más</a></div>");
        img.appendTo(imgprev);
        imgprev.appendTo(thumbnail);
        caption.appendTo(thumbnail);
        thumbnail.appendTo($('#new-container'));
    });
    count++;
}
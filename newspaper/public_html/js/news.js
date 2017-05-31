var json = ["data/1.json", "data/2.json"];
var count = 0;

$(document).ready(function () {
    $('#load').click(function () {
        loadJSON();
    });
    $('#body').scroll(function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            loadJSON();
        }
    });
});

function loadJSON() {
    if (count >= json.length) {
        showWarning();
    } else {
        $.getJSON(json[count].toString(), function (jsonObject) {
            createData(jsonObject);
        });
    }
}

function createData(jsonObject) {
    $.each(jsonObject, function (i, noticia) {
        var thumbnail = $('<div>', {class: "thumbnail"});
        
        var imgprev = $('<div>', {class: "new-img"});
        
        var img = $('<img>',{src: noticia.imgmid, alt: noticia.title, class: "img-responsive shadow-green-dark"});
        
        var caption = $('<div>', {class: "new-info"});
        
        var title = $('<h3>', {text: noticia.title});
        
        title.append($('<br>'));
        title.append($('<small>', {text: noticia.datetime}));
        title.appendTo(caption);
        caption.append(noticia.description);
        
        img.appendTo(imgprev);
        imgprev.appendTo(thumbnail);
        caption.appendTo(thumbnail);
        thumbnail.appendTo($('#news'));
    });
    count++;
}

function showWarning(){
    $('#no-more-news').fadeIn(750).delay(1000).fadeOut(750);
}
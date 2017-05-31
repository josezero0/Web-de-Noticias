var word = ["seguridad   ", "hacking   ", "anonimato   "];
var aux_word = 0;

$(document).ready(function(){
    setInterval(function(){
        printWord(word[aux_word%3].toString());
    }, 300);
});

function printWord(text){
    if($("#mecano").html().length < text.length){
        $("#mecano").html($("#mecano").html()+text[$("#mecano").html().length]);
    }else{
        aux_word++;
        $("#mecano").html("");
    }
}

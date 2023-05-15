//Nad elementom koji predstavlja to i to iz html-a sam napravio osluškivač događaja tipa "blur" koji se pokreće kada element izgubi fokus
var nazivPredmeta = document.getElementById("nazivPredmeta");
nazivPredmeta.addEventListener("blur", function() {
    validirajNaziv(nazivPredmeta);
})


 
var vrijemePočetak = document.getElementById("vrijemePočetak");
vrijemePočetak.addEventListener("blur", function() {
    validirajPočetak(vrijemePočetak);
})

var vrijemeKraj = document.getElementById("vrijemeKraj");
vrijemeKraj.addEventListener("blur", function() {
    validirajKraj(vrijemeKraj);
})

var tip = document.getElementById("tip");
tip.addEventListener("blur", function() {
    validirajTip(tip);
})

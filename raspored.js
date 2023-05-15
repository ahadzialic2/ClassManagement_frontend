//ovim funkcijama sam osigurao da sva polja budu prazna osim onog u koji unosim tj. po kojem filtriram
function resetujTipVrijemeDan() {
    document.getElementById("tipAktivnostiForm").value = "";
    document.getElementById("vrijemeTrajanjaForm").value = "";
    document.getElementById("danForm").value = "";
}

function resetujPredmetVrijemeDan() {
    document.getElementById("nazivPredmetaForm").value = "";
    document.getElementById("vrijemeTrajanjaForm").value = "";
    document.getElementById("danForm").value = "";
}

function resetujPredmetTipDan() {
    document.getElementById("nazivPredmetaForm").value = "";
    document.getElementById("tipAktivnostiForm").value = "";
    document.getElementById("danForm").value = "";
}

function resetujPredmetTipVrijeme() {
    document.getElementById("nazivPredmetaForm").value = "";
    document.getElementById("tipAktivnostiForm").value = "";
    document.getElementById("vrijemeTrajanjaForm").value = "";
}

var ras = document.getElementById("tablicaRaspored");
FiltrirajRaspored.postaviRaspored(ras);

//prije funkcije filter() sam osigurao da ostala polja budu prazna, osim onog polja po kojem filtriram. Kako samo to polje ima vrijednost, provjerom popunjesti svih polja pronaći ću tačno ono koje mi treba jer jedino ono ima vrijednost. Tada ću pozvati odgovarajuću funkciju za to polje stavio sam uslove da polja koja imaju neki unos neki string unesen ona ce se filtrirati. Sva ostala polja se resetuju pomoću funkcija koje pozivam sa atributom onfocus.
function filter() {
    var nazivPredmetaForm = document.getElementById("nazivPredmetaForm");
    var imePredmeta = nazivPredmetaForm.value;

    var tipAktivnostiForm = document.getElementById("tipAktivnostiForm");
    var tipAktivnosti = tipAktivnostiForm.value;

    var vrijemeTrajanjaForm = document.getElementById("vrijemeTrajanjaForm");
    var vrijemeTrajanja = vrijemeTrajanjaForm.value;

    var danForm = document.getElementById("danForm");
    var dan = danForm.value;

    if (imePredmeta) {
        FiltrirajRaspored.filtrirajPredmet(imePredmeta);
    } else if (tipAktivnosti) {
        FiltrirajRaspored.filtrirajTip(tipAktivnosti);
    } else if (vrijemeTrajanja) {
        FiltrirajRaspored.filtrirajTrajanje(vrijemeTrajanja);
    } else if (dan) {
        if (dan[0] === "+") {
            FiltrirajRaspored.filtrirajBuduce(dan);
        } else if (dan[0] === "-") {
            FiltrirajRaspored.filtrirajProslo(dan);
        }
    }

}

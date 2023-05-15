/*Modul sam napravio koristeći modul pattern(šablon)koji enkapsulira metode koje upravljaju mojom stranicom.
Sa returnom sam sve te metode naveo i učinio ih javnim*/
let FiltrirajRaspored = (function () {
    let raspored = null;

    /*Metoda postaviRaspored prima referencu na div koji sadrži raspored sa prve spirale.*/

    function postaviRaspored(tablicaRaspored) {
        raspored = tablicaRaspored;
    }

    /* Metoda filtrirajPredmet kao parametar prima string koji predstavlja dio naziva predmeta. Kao rezultat u rasporedu se trebaju sakriti sve 
    aktivnosti čiji naziv predmeta ne sadrži navedeni string. Ukoliko se proslijedi prazan string sve aktivnosti se trebaju prikazati. 
    Ukoliko prije poziva ove metode nije pozvana metoda postaviRaspored ispišite sa console.log da se treba postaviti raspored. 
    Prilikom sakrivanja aktivnosti prikazuje se izgled ćelija kao da ne postoji aktivnost na tom mjestu u tabeli.*/

    function filtrirajPredmet(dioNazivaPredmeta) {
        if (!raspored) {
            console.log("Niste postavili raspored!");
            return;
        }

        var nazivPredmeti = document.getElementsByClassName("predmeti");

        for (var i = 0; i < nazivPredmeti.length; i++) {
            var predmetPrviDioString = nazivPredmeti[i].innerText.split("\n")[0];
            if (!predmetPrviDioString.includes(dioNazivaPredmeta)) {
                nazivPredmeti[i].style.backgroundColor = "gray";
                nazivPredmeti[i].innerText = "";
            }
        }

    }

    /*Metoda filtrirajTip kao parametar prima string koji predstavlja naziv tipa aktivnosti. 
    Kao rezultat u rasporedu se trebaju sakriti sve aktivnosti koje nisu ovog tipa. 
    Ako se proslijedi prazan string prikažite sve aktivnosti.*/

/*pitanje: kako sam omogucio da filtrirajTip filtrira sve aktivnosti ako se preoslijedi prazan string?
ofgovor: rješavao sam glavni slučaj tj. filtrirao aktivnosti, samim tim sam riješio i situaciju u kojoj je parametar prazan. tj. not operator ! ili if(!x) vraca true za svaku "netacnu" vrijednost pa npr. ako smo napisali predavanja onda if(!predavanja) znaci da vrati true za sve sto nema predavanje u svom nazivu a to znaci da sakrije sve sto nema predavanje u svom nazivu*/
    function filtrirajTip(nazivTipaAktivnosti) {
        var nazivTipa = document.getElementsByClassName("predmeti");

        for (var i = 0; i < nazivTipa.length; i++) {
            var predmetDrugiDioString = nazivTipa[i].innerText.split("\n")[1];
            if (!predmetDrugiDioString.includes(nazivTipaAktivnosti)) {
                nazivTipa[i].style.backgroundColor = "gray";
                nazivTipa[i].innerText = "";
            }

        }
    }

    /*Metoda filtrirajTrajanje kao parametar prima broj minuta. Rezultat poziva ove metode je da su sakrivene aktivnosti čije je trajanje 
    u minutama veće od broja iz parametra. Ako se proslijedi 0 trebaju se sakriti sve aktivnosti.*/

    function filtrirajTrajanje(brojMinuta) {
        var predmeti = document.getElementsByClassName("predmeti");
        for (var i = 0; i < predmeti.length; i++) {
            var trajanjePredmeta = predmeti[i].getAttribute("colspan") * 30;
            if (trajanjePredmeta > brojMinuta) {
                predmeti[i].style.backgroundColor = "gray";
                predmeti[i].innerText = "";
            }
        }
    }

    /*Metoda filtrirajProslo ima parametar koji je tipa string i predstavlja naziv dana. Kao rezultat sakrivaju se 
    sve aktivnosti koje se nalaze prije navedenog dana. 
    Ukoliko je prosljeđen string prvog dana u rasporedu ili dan koji se ne nalazi u rasporedu prikazuju se sve aktivnosti.*/

/*Pronalazimo dane koji se nalaze prije dana koji smo primili kao parametar. Od tih  dana koje pronađemo uzmemo sve predmete tog dana i za svaki predmet mu promijenimo stil i promijenimo tekst tj. vizuelno ga sakrijemo*/
    function filtrirajProslo(nazivDana) {
        var dani = document.getElementsByClassName("dan");

        let daniobj = {
            "ponedjeljak": 0,
            "utorak": 1,
            "srijeda": 2,
            "četvrtak": 3,
            "petak": 4
        };
        for (var i = 0; i < dani.length; i++) {
            if (daniobj[nazivDana.substring(1).toLowerCase()] > i) {
                //dohvati predmete za ovaj dan preko parenta od i-tog dana
                //uraditi istu proceduru za skrivanje predmeta
                let predmeti = dani[i].parentElement.children;
                for (var j = 0; j < predmeti.length; j++) {
                    if (predmeti[j].className.includes("predmeti")) {
                        predmeti[j].style.backgroundColor = "gray";
                        predmeti[j].innerText = "";
                    }
                }
            }
        }
    }

    /*Metoda filtrirajBuduce ima parametar koji je tipa string i predstavlja naziv dana. 
    Kao rezultat poziva metode sakrivaju se aktivnosti koje se nalaze nakon navedenog dana. 
    Ukoliko je prosljeđen string posljednjeg dana u rasporedu ili dan koji se ne nalazi u rasporedu prikazuju se sve aktivnosti.*/

    function filtrirajBuduce(nazivDana) {
        var dani = document.getElementsByClassName("dan");

        let daniobj = {
            "ponedjeljak": 0,
            "utorak": 1,
            "srijeda": 2,
            "četvrtak": 3,
            "petak": 4
        };
        for (var i = 0; i < dani.length; i++) {
            if (daniobj[nazivDana.substring(1).toLowerCase()] < i) {
                //dohvati predmete za ovaj dan preko parenta od i-tog dana
                //uraditi istu proceduru za skrivanje predmeta
                let predmeti = dani[i].parentElement.children;
                for (var j = 0; j < predmeti.length; j++) {
                    if (predmeti[j].className.includes("predmeti")) {
                        predmeti[j].style.backgroundColor = "gray";
                        predmeti[j].innerText = "";
                    }
                }
            }
        }
    }

    return {
        postaviRaspored: postaviRaspored,
        filtrirajTrajanje: filtrirajTrajanje,
        filtrirajTip: filtrirajTip,
        filtrirajBuduce: filtrirajBuduce,
        filtrirajProslo: filtrirajProslo,
        filtrirajPredmet: filtrirajPredmet
    };
})();

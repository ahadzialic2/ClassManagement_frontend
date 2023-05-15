    //ieNaziv je kopija varijable nazivPredmeta iz planiranjeNastavnik.js
    function validirajNaziv(ieNaziv) {
        var nazivpred = document.getElementById("nazivPredmeta");
        var nazivpredRegeX = new RegExp(/^[A-Z]{2,5}[0-9]?$/);
    if (!nazivpredRegeX.test(nazivpred.value)) {
        ieNaziv.style.backgroundColor="#ffcccb";
    } else {
        ieNaziv.style.backgroundColor="lightgreen";
    }    
}
    function validirajPočetak(iePočetak) {
        
        var vrijemepoc = document.getElementById("vrijemePočetak").value;
        if (vrijemepoc[0]+vrijemepoc[1] >= 20) {
            iePočetak.style.backgroundColor="#ffcccb";
        }   else {
            iePočetak.style.backgroundColor="lightgreen";
        }            
    }

    function validirajKraj(ieKraj) {
        var vrijemepoc = document.getElementById("vrijemePočetak").value;
        var vrijemepocSplit = vrijemepoc.split(":");
        var vrijemepocIntHours = parseInt(vrijemepocSplit[0]);
        var vrijemepocIntMinutes = parseInt(vrijemepocSplit[1]);
        var vrijemekraj = document.getElementById("vrijemeKraj").value;
        var vrijemekrajSplit = vrijemekraj.split(":");
        var vrijemekrajIntHours = parseInt(vrijemekrajSplit[0]);
        var vrijemekrajIntMinutes = parseInt(vrijemekrajSplit[1]);

        if (vrijemepocIntHours > vrijemekrajIntHours)  {
            ieKraj.style.backgroundColor="#ffcccb";
        } else if (vrijemepocIntHours == vrijemekrajIntHours && vrijemepocIntMinutes >= vrijemekrajIntMinutes ) {
            ieKraj.style.backgroundColor="#ffcccb";
        }  
        
        else {
            ieKraj.style.backgroundColor="lightgreen";
        }
    }
    
    function validirajTip(ieTip) {
        var tip = document.getElementById("tip").value;
        
         var vrijemepoc = document.getElementById("vrijemePočetak").value;
         var vrijemepocSplit = vrijemepoc.split(":");
         var vrijemepocIntHours = parseInt(vrijemepocSplit[0]);
         var vrijemepocIntMinutes = parseInt(vrijemepocSplit[1]);
         var vrijemekraj = document.getElementById("vrijemeKraj").value;
         var vrijemekrajSplit = vrijemekraj.split(":");
         var vrijemekrajIntHours = parseInt(vrijemekrajSplit[0]);
         var vrijemekrajIntMinutes = parseInt(vrijemekrajSplit[1]);

         
       var vrijemepocMinutes = vrijemepocIntHours*60 + vrijemepocIntMinutes;
       var vrijemekrajMinutes = vrijemekrajIntHours*60 + vrijemekrajIntMinutes;

         if (tip === "predavanje") {
            if(vrijemekrajMinutes - vrijemepocMinutes < 60 || vrijemekrajMinutes-vrijemepocMinutes > 180) {
                ieTip.style.backgroundColor="#ffcccb";
            } else {
                ieTip.style.backgroundColor="lightgreen";

            }
        } else { 
             if (vrijemekrajMinutes - vrijemepocMinutes < 45 || vrijemekrajMinutes - vrijemepocMinutes > 180) {   
                ieTip.style.backgroundColor="#ffcccb";
            } else {
                ieTip.style.backgroundColor="lightgreen";

            }
 

         } 
    }

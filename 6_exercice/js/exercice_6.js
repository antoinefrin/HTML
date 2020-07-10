let salaireBrut;
let impots;
let assurance;
let pensions;
let montantDesPrelevement;
let montantSalaireApresPrelevement;

let genre;
let resultGenre;
let nombrePersonneCharge;
let resultNombrePersonneCharge;
let typePrime;
let resultTypePrime;

function salaireMoinsFrais(){
    salaireBrut = Number(document.getElementById("salaireBrut").value);

    impots = Number(salaireBrut * 0.18);
    document.getElementById("montantImpots").value = impots;
    //sconsole.log(impots)

    assurance = Number(salaireBrut * 0.07);
    document.getElementById("montantAssurance").value = assurance;

    pensions = Number(salaireBrut * 0.05);
    document.getElementById("montantPensions").value = pensions;

    montantDesPrelevement = Number(impots + assurance + pensions);
    document.getElementById("montantDesPrelevement").value = montantDesPrelevement;
    
    montantSalaireApresPrelevement = Number(salaireBrut - montantDesPrelevement);
    document.getElementById("montantSalaireApresPrelevement").value = montantSalaireApresPrelevement;
}

function abattementImpots(){
    salaireBrut = Number(document.getElementById("salaireBrut").value);
    genre = document.getElementById("genre");
    resultGenre = (genre.options[genre.selectedIndex].value);

    if (resultGenre === "femme"){
        resultGenre = Number(salaireBrut * 0.02);
    }else{
        resultGenre = Number(salaireBrut * 0);
    }
    
    nombrePersonneCharge = document.getElementById("nombrePersonneCharge");
    resultNombrePersonneCharge = (nombrePersonneCharge.options[nombrePersonneCharge.selectedIndex].value);

    if(resultNombrePersonneCharge === "personneSeul" ){
        resultNombrePersonneCharge = Number(salaireBrut * 0);
    }else if (resultNombrePersonneCharge === "troisPersonnesCharge"){
        resultNombrePersonneCharge = Number(salaireBrut * 0.01);
    }else /* (resultNombrePersonneCharge === quatrePersonnesCharge)*/{
        resultNombrePersonneCharge = Number(salaireBrut * 0.02);
    }

    typePrime = document.getElementById("typePrime");
    resultTypePrime = (typePrime.options[typePrime.selectedIndex].value);

    if (resultTypePrime === "centDollars"){
        resultTypePrime = Number(+ 100);
    }else{
        resultTypePrime = Number(+ 150);
    }

    let impotsCritere = Number(impots - (resultGenre + resultNombrePersonneCharge));
    console.log(impotsCritere);

    let impotsCriterePlusFrais = Number(assurance + pensions +impotsCritere);
    console.log(impotsCriterePlusFrais);

    let salaireMoinsImpotsCriterePlusFrais = Number(salaireBrut - impotsCriterePlusFrais);
    console.log(salaireMoinsImpotsCriterePlusFrais);

    let salaireMoinsFraisPlusPrime = Number(salaireMoinsImpotsCriterePlusFrais + resultTypePrime);
    console.log(salaireMoinsFraisPlusPrime);

    document.getElementById("salaireBrutFinal").value = salaireMoinsFraisPlusPrime;
}
function readInput(){
    let input = document.getElementById('name').value;
    document.getElementById('ouput').innerHTML = input;
}

function kunde(name, konto1Guthaben, konto2Guthaben, plz, alter){
    this.name = name;
    this.konto1Guthaben = konto1Guthaben;
    this.konto2Guthaben = konto2Guthaben;
    this.plz = plz;
    this.alter = alter;

    function guthaben(){
        let guthaben = konto1Guthaben + konto2Guthaben;
        return guthaben;
    };
}

let kunde1 = new kunde("Tom", 300, 400, '65520', 25);
let kunde2 = new kunde("Lisa", 150, 1000, '30000', 30);

function showKunde(){
    document.getElementById('kunde1').innerHTML = kunde1.name;
    document.getElementById('kunde2').innerHTML = kunde2.name;
}




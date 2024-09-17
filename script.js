module.exports = function Osztok(szam){

    if (typeof szam === 'string'){
        throw new Error("Nem számot adtál meg!")
    }

    if (!Number.isInteger(szam)){
        throw new Error("Nem egész számot adtál meg!")
    }

    let osszeg = 0;
    for(let i = 1; i <= szam; i++){
        if (szam % i === 0){
            osszeg += i;
        }
    }
    return osszeg;

}
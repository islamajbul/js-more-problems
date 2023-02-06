function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * 3;
    console.log('Chair wood required',chairWood,'cft');

    const tableWood = tableQuantity * 10;
    console.log('Table wood required',tableWood,'cft');

    const bedWood = bedQuantity * 50;
    console.log('Bed wood required',bedWood,'cft');

    // console.log(chairQuantity,tableQuantity,bedQuantity);
    const totalWood = chairWood + tableWood + bedWood ;
    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log('Total wood required:', totalWood,'cft');
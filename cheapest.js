const phones = [
    {name: 'Samsung', camera: 12, storage: '64gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 42000, color: 'gray'},
    {name: 'iphone', camera: 16, storage: '64gb', price: 96000, color: 'red'},
    {name: 'Oppo', camera: 32, storage: '128gb', price: 33000, color: 'white'},
    {name: 'Redmi', camera: 48, storage: '256gb', price: 30000, color: 'black'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
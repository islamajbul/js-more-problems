const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 15, 16, 17, 25];
function add(num1,num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(age));
console.log(typeof add);

/* -----------Array value check------------------- */
console.log(friends.includes(14));
console.log(friends.includes(20));

if(friends.indexOf(252) !== -1){

}
// concat : 
const newFriendsAge = [12,13,12,11]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)
let namePlayer = prompt ("what's you re name ?");
const rightPrice = Math.ceil(Math.random() * 100);

let selectPlayer = parseInt(prompt ("Give a price"));
while (selectPlayer !== rightPrice) {
let selectPlayer = parseInt(prompt ("Give a price"));

if (selectPlayer === rightPrice) {
    console.log("gagne");
}
else if (selectPlayer < rightPrice) {
    console.log("c'est plus");
}
else if (selectPlayer > rightPrice) {
    console.log("c'est moins");
}
else {
    console.error("erreur");
}
}



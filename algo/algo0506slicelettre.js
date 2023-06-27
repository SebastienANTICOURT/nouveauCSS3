// Créer une fonction qui prend une chaîne et renvoie un tableau avec toutes rotations possibles de la chaîne en majuscules.
//exemple : scrollingText("lapin") ➞ ["LAPIN", "APINL", "PINLA", "INLAP", "NLAPI", "LAPIN"]

const scrollingText = (text) => {

    const table = []

    for (let i = 0; i < text.length; i++) {
        table.push(text.toUpperCase())
        text = text.slice(1) + text[0]
        }
       return table
};

console.log(scrollingText("lapin"));

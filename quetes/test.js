/*const body = document.querySelector('body')
const button = document.getElementById('clickme')
const sentence = document.getElementById('title')

const colors = ['yellow', 'white', 'black', "pink", "purple", "red", "orange","blue", "green"]

const sentencies = ["I'm Beautiful", "I love DOM", " DOM forever", "I don't understand", "Error 404", "DOM Torretto" ]

button.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * colors.length)
    console.log(colors[randomColor])
    const randomSentences =  Math.floor(Math.random() * sentencies.length)

    body.style.backgroundColor = colors[randomColor]
    sentence.innerHTML = sentencies[randomSentences]
})*/

/*const titre= document.getElementById("title");
titre.innerHTML += "test";
titre.style.color = "red";

const newPara = document.createElement("p");
newPara.id ="nouveau";

const texte = document.createTextNode("insere");

newPara.appendChild(texte);
document.body.appendChild(newPara);
newPara.style.color = "black";*/

const title = document.querySelector(".title");

title.styles.fontSize = "60px";
title.styles.textAlign = "center";
title.style.color = "red";
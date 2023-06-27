const body = document.querySelector("body")
const button = document.getElementById("clickme")
const sentence = document.getElementById ("title")

const colors = ["yellow", "green", "purple", "blue"]

const sentencies = ["beautiful", "i love DOM", "DOM forever"]

button.addEventListener("click", () =>{
    const randomColor = Math.floor(Math.random()*colors.length)
    console.log(colors[randomColor])
})
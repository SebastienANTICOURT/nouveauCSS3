require('dotenv').config();

const myName = process.env.MY_NAME;
const myCity = process.env.MY_CITY;
const myLanguage = process.env.MY_LANGUAGE;

const sentence = `I am ${myName}, a student in ${myCity}, and I love ${myLanguage}.`;

console.log(sentence);




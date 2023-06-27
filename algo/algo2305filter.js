
//EXERCICE 1
// Voici un tableau de personnes :
// Tu dois écrire une fonction findAdult qui renvoie un nouveau tableau avec deux sous-tableaux :
// - le premier avec uniquement les femmes adultes
// - le deuxième avec uniquement les hommes adultes
// Rappel : une personne est adulte si elle a au moins 18 ans.
// exemple : findAdult(people) renvoie :
// [ [ femmes adultes], [hommes adultes] ]
// Indice : tu peux utiliser la méthode filter sur un tableau pour filtrer uniquement les éléments qui t'intéressent ou une boucle for pour parcourir le tableau et vérifier si chaque élément correspond à tes critères ou un forEach.

// Voici un exemple de tableau de personnes :

const persons = [
    { name: 'Mary Poppins', age: 32, sex: 'female' },
    { name: 'Tony Stark', age: 36, sex: 'male' },
    { name: 'John Doe', age: 12, sex: 'male' },
    { name: 'Jane Doe', age: 6, sex: 'female' },
    { name: 'Maggie Simpson', age: 2, sex: 'female' },
    { name: 'Leonardo', age: 92, sex: 'male' },
    { name: 'Carla Moreau', age: 24, sex: 'female' },
    { name: 'Mickael Jackson', age: 17, sex: 'male' },
    { name: 'Penelope Milena', age: 27, sex: 'female' },
    { name: 'Homer Simpson', age: 45, sex: 'male' },
    { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
    { name: 'Carla Bruni', age: 54, sex: 'female' },
    { name: 'Lisa Simpson', age: 13, sex: 'female' },
    { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
    { name: 'Penelope Cruz', age: 47, sex: 'female' },
  ];
  
  
  /*const findAdult = (people) => {
  const filteredArray = persons.filter(obj => obj.age >18 && obj.sex === "female");
  console.log(filteredArray);
  
  }
  console.log(findAdult(persons));*/

  const findAdult = (people) => {
    // code ici
      const maleAdult = people.filter(person => person.age >= 18 && person.sex === "male");
      const femaleAdult = people.filter(person => person.age >= 18 && person.sex === "female");
  
      const adultesByGenre = [maleAdult,femaleAdult];
  
      return adultesByGenre;
  }

console.log(findAdult(persons));
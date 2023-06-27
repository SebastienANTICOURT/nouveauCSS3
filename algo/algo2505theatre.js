
/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.




Indice : Pour faire cette exercice, vous pouvez utiliser une boucle for imbriquée.
exemple : 
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}*/















const theaterSieges = (colonnes,rangée) => {
  // Your code here !
  let matrice = [];
  for (let i = 0; i < colonnes; i++) {
      let tabColonne = [];
      for (let j = 0; j < rangée; j++) {
        let tabRangée = `${i+1}-${j+1}`;/*prend la valeur de la variable*/
        tabColonne.push(tabRangée);
      }
      matrice.push(tabColonne);
    }
return matrice;
}

 console.log(theaterSieges(26,100)); 


 

/*const theaterSieges = (colonnes,sieges) => {

    // Your code here !
  }
  
  console.log(theaterSieges(26,100)); // Doit afficher : [['1-1', '1-2', '1-3', ..., '1-100'], ['2-1', '2-2', '2-3', ..., '2-100'], ... ['26-1', '26-2', '26-3', ..., '26-100']]*/
  /*for (let i =1; i<10;i++) {
    for (let j=1; j<5;j++){
      console.log(i,j);
    }
   }*/
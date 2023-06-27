

//EXERCICE 1
// On te donne 2 angles d'un triangle. Écris la fonction qui permet de récupérer la valeur du 3ème angle.
// Rappel : la somme des 3 angles d'un triangle est toujours égale à 180°
// Exemple : (90, 30) renvoie 60
// Exemple : (20, 80) renvoie 80


/*const thirdAngle = (a,b) => {
return (180-(a+b));
}
  
  console.log(thirdAngle(50, 50)); // 60*/
  
  /*//-----------------
  
  //EXERCICE 2
  
  // Ecris une fonction permettant de determiner si une année est bissextile.
  // Elle doit renvoyer true si l'année est bissextile, false si elle ne l'est pas.
  // Rappel : une année est bissextile si elle est divisible par 4 sans être divisible par 100, ou si elle est divisible par 400.
  // Exemple : 2016 est bissextile, 2015 n'est pas bissextile, 2000 est bissextile*/
  
  const leapYear = (year) => {
  return year %4 === 0 &&  year %100 !==0;
  }
  console.log(leapYear(2019));  true
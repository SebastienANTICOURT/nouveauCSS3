


    /*return str.toUpperCase([0]).slice(0,1) + str.toUpperCase([1]).slice(0);*/

  
/*Algo 2*/
const capitalizer = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
    console.log(capitalizer("TOM"));

    /*Algo 3*/
    const abbreviat = (str) => {
        str.charAt(0) + "." + (str.charAt(indexOf("  ") +1)); 
    
    }
    
    console.log(abbreviat("Alyson Hannigan"))

  /*// TROISIÈME EXERCICE
  // Ecris une fonction abbreviate qui convertit un nom complet en initiales.
  
  // exemple : "Samuel Dupont" devient "S.D"
  
  const abbreviate = (str) => {
    return strC.slice(0,1) + "." + str.toUpperCase().slice(0,1) ;
  }
  console.log(abbreviate("Samuel Dupont"))
  // code ici
  }
  
  console.log(abbreviate("Alyson Hannigan")) // A.H*/
  



  
  
  // const abbreviate = (str) => {
  //   const words = str.split("");
  //     return str.toUpperCase(words[0]).slice(0,1) + "." + str.toUpperCase(words[2]).slice(0,1);
  // }
  // console.log(abbreviate("Seb DUPONT")); 
  

  const abbreviate = (str) => {
    return str.charAt(0) + "." + str.charAt(str.indexOf(" ") + 1)
   }

   console.log(abbreviate(""))
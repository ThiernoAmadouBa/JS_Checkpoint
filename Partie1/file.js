function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Test the function
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

  
  function countNumber(str) {
    let count=0;
    let prenom= "Abdourahmane)";
    for(let i=0 ; i<prenom.length; i++)
    {
        count ++;
    }
    return count;

  }


  console.log(countNumber());


  function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" -");
  }
  
  // Test the function
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  console.log(capitalizeWords("javascript is fun")); // Output: "Javascript Is Fun"
  
  

let list =["C1", "C3", "C2", "C1", "C8","C8","C9","C7","C5","C1"];
let code ="C5";
let compteur =0;
for (let i = 0; i < list.length; i++) {
   if(code===list[i]){
    compteur++
      
   }
}

console.log(code + " " + compteur)
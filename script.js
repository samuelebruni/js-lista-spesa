//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

let completeList = [];
while (confirm('devi aggiungere un elemento alla tua lista?')){
   
   let item = prompt("inserisci l'elemento da aggiungere in lista") + " ";
   completeList += item;
   const addText = document.querySelector('ul');

   addText.innerHTML += `<li>${item}</li>`;

   console.log(item);
}

console.log(completeList);

//finish
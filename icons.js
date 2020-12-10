$(document).ready(function () {
  ///////////////
  // Milestone 1
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  // Esempio di icona <i class="fas fa-dog"></i> -----> name= dog | prefix= fa- | type = animal | family = fas 
  class Icon{
    constructor(name, prefix, type, family){
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }
  const arrayIcons = [
    new Icon('cat', 'fa', 'animal', 'fas'),
    new Icon('dog', 'fa', 'animal', 'fas'),
    new Icon('dove', 'fa', 'animal', 'fas'),
    new Icon('carrot', 'fa', 'vegetable', 'fas'),
    new Icon('pepper-hot', 'fa', 'animal', 'fas'),
    new Icon('apple-alt', 'fa', 'animal', 'fas'),
    new Icon('child', 'fa', 'people', 'fas'),
    new Icon('female', 'fa', 'people', 'fas'),
    new Icon('male', 'fa', 'people', 'fas')
  ];
  // Selezioniamo il container icons
  const iconsContainer = $('.icons');
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  showIcons(iconsContainer, arrayIcons);
  
  ///////////////
  // Milestone 2
  // definiamo dei colori per le icone (blue, orange, purple)

  //aggiungiamo dei colori usando una funzione
  
  //inseriamo le icone colorate nel container

  ///////////////
  // Milestone 3
  //estrapoliamo i tipi di icone

  //aggiungiamo i tipi alla select

  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
  
});


/* ---- FUNCTIONS ----*/
///////////////
// Milestone 1
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
function showIcons(selector, icons){
  icons.forEach(icon => {
    const markup = `
    <div>
      <i class="${icon.family} ${icon.prefix}-${icon.name}"></i>
      <div class="title">${icon.name.toUpperCase()}</div>
    </div>
    `;
    selector.append(markup);
    console.log(markup);
  });
}

///////////////
// Milestone 2
// funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 
// funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.


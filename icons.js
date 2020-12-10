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
    new Icon('pepper-hot', 'fa', 'vegetable', 'fas'),
    new Icon('apple-alt', 'fa', 'vegetable', 'fas'),
    new Icon('child', 'fa', 'people', 'fas'),
    new Icon('female', 'fa', 'people', 'fas'),
    new Icon('male', 'fa', 'people', 'fas')
  ];
  // Selezioniamo il container icons
  const iconsContainer = $('.icons');
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  //showIcons(iconsContainer, arrayIcons); //Solo per milestone 1 per gli altri milestone viene commentato
  
  ///////////////
  // Milestone 2
  // definiamo dei colori per le icone (blue, orange, purple) 
  //----> blue per animal | orange per vegetable | purple per people
  const blue = '#0000FF';
  const orange = '#FFA500';
  const purple = '#800080';
  
  //aggiungiamo dei colori (usando una funzione)
  const animalIcons = arrayIcons.filter(icon => icon.type == 'animal').map(animal => {
    const {name, prefix, type, family} = animal;
    return {name, prefix, type, family, color: blue};
  });
  //animalIcons.forEach(animal => animal.color = blue);
  const vegetableIcons = arrayIcons.filter(icon => icon.type == 'vegetable').map(vegetable => {
    const {name, prefix, type, family} = vegetable;
    return {name, prefix, type, family, color: orange};
  });
  //vegetableIcons.forEach(animal => animal.color = orange);
  const peopleIcons = arrayIcons.filter(icon => icon.type == 'people').map(person => {
    const {name, prefix, type, family} = person;
    return {name, prefix, type, family, color: purple};
  });
  //peopleIcons.forEach(animal => animal.color = purple);
  
  //inseriamo le icone colorate nel container
  showIcons(iconsContainer, animalIcons);
  showIcons(iconsContainer, vegetableIcons);
  showIcons(iconsContainer, peopleIcons);

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
      <i class="${icon.family} ${icon.prefix}-${icon.name}" style="color:${icon.color}"></i>
      <div class="title">${icon.name.toUpperCase()}</div>
    </div>
    `;
    selector.append(markup);
  });
}
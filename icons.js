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
  };

  let arrayIcons = [
    new Icon('cat', 'fa', 'animal', 'fas'),
    new Icon('dog', 'fa', 'animal', 'fas'),
    new Icon('dove', 'fa', 'animal', 'fas'),
    new Icon('dragon', 'fa', 'animal', 'fas'),
    new Icon('crow', 'fa', 'animal', 'fas'),
    new Icon('fish', 'fa', 'animal', 'fas'),
    new Icon('carrot', 'fa', 'vegetable', 'fas'),
    new Icon('pepper-hot', 'fa', 'vegetable', 'fas'),
    new Icon('apple-alt', 'fa', 'vegetable', 'fas'),
    new Icon('lemon', 'fa', 'vegetable', 'fas'),
    new Icon('child', 'fa', 'people', 'fas'),
    new Icon('female', 'fa', 'people', 'fas'),
    new Icon('male', 'fa', 'people', 'fas'),
    new Icon('biking', 'fa', 'people', 'fas'),
    new Icon('user', 'fa', 'people', 'fas')
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
  
  //aggiungiamo dei colori usando una funzione
  const animalIcons = newColoredIcons(arrayIcons, 'animal', blue); 
  const vegetableIcons = newColoredIcons(arrayIcons, 'vegetable', orange);
  const peopleIcons = newColoredIcons(arrayIcons, 'people', purple);
  
  arrayIcons = [...animalIcons, ...vegetableIcons, ...peopleIcons];
  
  //inseriamo le icone colorate nel container
  showIcons(iconsContainer, arrayIcons);

  ///////////////
  // Milestone 3
  //estrapoliamo i tipi di icone
  let iconTypes = arrayIcons.map(icon => icon.type); //Un array con tutti i tipi di icone (i type sono ripetuti)
  iconTypes = iconTypes.filter((type,index,allTypes) => allTypes.indexOf(type) === index); //rimuovo i duplicati perché indexOf(type) restituisce il primo indice in cui si trova un type 
  
  //aggiungiamo i tipi alla select  
  iconTypes.forEach(type=>{
    const markup = `<option value="${type}">${type}</option>`;
    $('#type').append(markup);
  });

  //al change mostriamo solo le icone filtrate
  $('#type').change(function () { 
    const value = this.value;
    iconsContainer.text(''); // Cancello le icone nel contenitore di icone
    switch (value) {
      case 'all':
        showIcons(iconsContainer, arrayIcons);
        break;
      case 'animal':
        showIcons(iconsContainer, animalIcons);
        break;
      case 'vegetable':
        showIcons(iconsContainer, vegetableIcons);
        break;
      case 'people':
        showIcons(iconsContainer, peopleIcons);
        break;
      default:
        showIcons(iconsContainer, arrayIcons);
    }
  });


});


/* ---- FUNCTIONS ----*/
///////////////
// Milestone 1
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

/**
 * Inserisce in append delle icone all'interno di un elemento html selezionato con jQuery.
 * 
 * @param {jQuery} selector Selettore jQuery.
 * @param {array} icons Array di icone.
 */
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

///////////////
// Milestone 2
//funzione per assegnare un colore ad un'icona

/**
 * Restituisce un array formato da icone del tipo specificato alle quali è stato aggiunto il colore specificato.
 * 
 * @param {array} icons Array di icone.
 * @param {string} type Tipo di icona a cui aggiungere un colore.
 * @param {string} color Codice del colore da aggiungere.
 * @return {array} Array di icone di tipo 'type' e colore 'color'.
 */
function newColoredIcons(icons, type, color){
  return icons.filter(icon => icon.type == type).map(filteredIcon => {
    const {name, prefix, type, family} = filteredIcon;
    return {name, prefix, type, family, color};
  });
}
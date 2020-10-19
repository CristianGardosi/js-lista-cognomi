// // ESERCITAZIONE COGNOMI IN LISTA ALFABETICA
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Array con cognomi inseriti
var listaCognomi = [ 'bianchi', 'rossi', 'duzioni', 'balsano', 'giorgini', ];

// Prompt per inserimento cognome utente
var cognome = prompt('Inserisci il tuo cognome').toLowerCase();

// Inserimento tramite push del cognome utente all'array precedentemente creato
listaCognomi.push(cognome);

// Ordinamento alfabetico dell'array comprensivo del cognome inserito dall'utente
listaCognomi.sort();
console.log(listaCognomi);

var items = ''

for (var i = 0; i < listaCognomi.length; i++){
    var item = listaCognomi[i];

    items += '<li>' + item + '</li>';
}

document.getElementById('surname-list').innerHTML = items;








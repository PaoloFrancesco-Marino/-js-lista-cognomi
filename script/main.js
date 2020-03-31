/**
 * 
 */



// chiedere all’utente il cognome +array dati

var addName = document.getElementById('name');
var btnSubmit = document.getElementById('btn-submit');

var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

var surname;

var order;

btnSubmit.addEventListener('click',
    function() {
        // aggiungere il cognome all'array esistente
        surnameList.push(addName.value);
        console.log(surnameList);
        // stampa la lista ordinata alfabeticamente
        surnameList.sort();
        console.log(surnameList)
        // scrivi anche la posizione della lista in cui il nuovo utente si trova
        order = surnameList.indexOf(addName.value) + 1;
        
        console.log(order);

    }
)

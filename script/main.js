/**
 * 
 */



// chiedere all’utente il cognome +array dati
var btnSubmit = document.getElementById('btn-submit');
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

btnSubmit.addEventListener('click',
    function() {
        // reference
        var addName = document.getElementById('name').value;

        var order = surnameList.indexOf(addName);

        if (order < 0) {
            // controllo se il cognome è gia presente
            surnameList.push(addName);
            // ordine alfabetico
            surnameList.sort();
            console.log(surnameList);
            // scrivi anche la posizione della lista in cui il nuovo utente si trova
            console.log('Nuovo Cognome aggiunto', );
        } else {
            console.error('Cognome gia esistente con ordine ', order + 1);
        }
              
    }
)

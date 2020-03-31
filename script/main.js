/**
 * 
 */



// chiedere all’utente il cognome +array dati
var btnSubmit = document.getElementById('btn-submit');
var listsurname = document.getElementById('surnamelist');
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var message = document.getElementById('verifica');

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
            message.innerHTML = 'Nuovo Cognome aggiunto';
            console.log('Nuovo Cognome aggiunto', );
        } else {
            message.innerHTML = 'Cognome gia esistente';
            console.error('Cognome gia esistente con ordine ', order + 1);
        }

        var items = '';
        for (var i = 0; i < surnameList.length; i++) {

            items += '<li>' + surnameList[i] + '</li>';

        }
        // scrivi anche la posizione della lista in cui il cognome si trova
        listsurname.innerHTML = items + 'L\'ordine del tuo cognome è:' + (surnameList.indexOf(addName) + 1)

    }
)

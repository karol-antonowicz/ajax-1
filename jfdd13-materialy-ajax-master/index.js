/* 1. Napisz promise, który:.
   - spełnia się po 3 sekundach
   - zwraca wartość 'Hura mój pierwszy Promise!'
 */


let promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('Hura mój peirwszy promise')
    }, 3000)
})


/* 2. Rozważ po ilu sekundach pojawi się console.log('Gotowe') - (PS. nie wklejaj od razu do konsoli, pomyśl :));
 */

/* let date = new Date();

 const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Gotowe!'), 5000);
 });

 setTimeout(() => {
     myPromise.then(val => console.log(val));
 }, 6000); */

/* 3. Napisz funkcję, która przyjmuje parametr "number" i zwraca promise, który.
   - spełnia się po "number" sekundach jeżeli "number" jest mniejszy niż 5
   - zwraca wartość 'Promise? To takie proste!'
   - odrzuca wartość 'Cholibcia, ale to długo...'
 */

 /*
const createNumberPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number < 5) {
            setTimeout(()=> {
                resolve('Promise? To takie proste')
            }, number * 1000)
        } else {
            reject('Cholibcia')
        }
    });
};


const funckja = (numbers) => {
    if (numbers < 5) {
       return promise = new Promise((resolve, reject) => {
            resolve('Promise? To takie proste!')
            reject('Cholibcia')
        })} else { 
            return promise = new Promise((resolve, reject) => {
            reject('Cholibcia')})
    } }




/*


/* 4. Napisz funkcję, która przyjmuje parametr "day" i zwraca promise, który:.
   - spełnia się po 5 sekundach
   - jeśli dzień jest zgodny z dzisiaj, to promise się spełnia i zwraca obiekt z kluczem time o wartosci aktualnej godziny
   - jeśli dzień jest inny, to promise ma być odrzucony (reject) z obiektem o kluczu "message" i wartości "Incorrect day, let's reject it!"
 */


/*

const dayMapper = [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
];

const superPromise = (givenDay) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            const today = new Date() 
            const mappedDay = dayMapper.findIndex(day => day === givenDay)
            if (mappedDay === today.getDay()) {
                resolve({
                    time: today.getHours()
                })
            } else {
                reject({
                    message: "Incorrect day"
                })
            }
        }, 5000)
    })
}





 
/* 5. Korzystając z funkcji fetch, wyświetl użytkowników w elemencie <table> */
/* SCHEMAT TABLICY: avatar | name | surname | email | gender | age */
/* LINK do serwera: https://randomuser.me/api */
/* LINK do dokumentacji: https://randomuser.me/documentation */
/* (*) Pobierz tylko 10 osób o polskiej narodowości.  */




function createColWithText(text){
    const col = document.createElement('td');
    col.innerText = text;
    return col
}

function showMessage(text) {
    const messageElement = document.getElementById('message')
    messageElement.innerText = text
}


showMessage('Loading...')
fetch('https://randomuser.me/api/?results=10&?nat=fr')   // &nat=pl dodaje nationality polskie --> info ze strony dokumentacji randomuser.me
.then(response=>response.json())
.then(response=> {
    const users = response.results;
    console.log(users)
    const tableBodyElement = document.getElementById('table').querySelector('tbody');
    users.forEach(user=> {

        const row = document.createElement('tr');
        const colAvatar = document.createElement('td')
        const avatar = document.createElement('img');
        avatar.setAttribute('src', user.picture.thumbnail)
        avatar.setAttribute('width', '30px')
        colAvatar.appendChild(avatar)

         let a =  [colAvatar,
            createColWithText(user.name.first),
            createColWithText(user.name.last),
            createColWithText(user.email),
            createColWithText(user.gender),
            createColWithText(user.dob.age),
        ].forEach(col=> {
            row.appendChild(col);
        });

        tableBodyElement.appendChild(row)
    });
    
    return users;
    })
    .then(users => {
        showMessage(`${users.length} users have been loaded successfully`)
    })





/* 6. Na sukces wyświetlenia do tabeli, wyświetl na górze strony informację (np. w paragrafie)
 "_NUMBER_ users have been loaded successfully"
 */

/* 7. Na error wyświetlenia danych w tabeli, wyświetl na górze strony informację (np. w paragrafie)
 "Some error occured."
 */

/* 8. Dane są dwa endpointy:
1) https://jsonplaceholder.typicode.com/albums
2) https://jsonplaceholder.typicode.com/users/1
Wyświetl w konsoli "name" usera i należące do niego albumy w postaci obiektu:
    {
        name: nazwa usera
        albums: tablica albums konkretnie tylko dla tego usera (przefiltruj tablice porównując userId i id)
    }
    (*) - przedstaw to w HTML
 */

/* 9. Dany jest endpoint:
https://jsonplaceholder.typicode.com/albums
Stwórz przycisk "Pobierz albumy", który po kliknięciu pobierze dane.
jak zaczyna się pobieranie wyświetla napis "Loading..." albo jakiś loader,
po zakończeniu pobierania danych lub w przypadku błędu, napis loading ma zniknąć.
*/

/* 10. Dany jest kod: */
// const ul = document.querySelector('ul');
// function displayUsers() {
//     fetch('https://randomuser.me/api')
//         .then(response => response.json())
//         .then(questions => ul.innerHTML = questions.map(q => `<li>${q.name}</li>`).join(''));
// }
/* Napisz powyższy kod w składni async await. */


/* 11. Zadanie numer 8. przerób na składnię async await.
 a) dalej używając Promise.all
 b) pozbywajac się Promise.all
 */

/* 12. Zadanie numer 10 umieść w bloku try / catch i obsłuż błędy. W przypadku błędu wyświetl alert z błędem.
 */

/* 13 (*). Dane są endpointy:
1) https://jsonplaceholder.typicode.com/albums
2) https://jsonplaceholder.typicode.com/users
3) https://jsonplaceholder.typicode.com/users/{id}
Stwórz formularz i przycisk "pobierz albumy użytkownika".
Po wpisaniu nazwy użytkownika i kliknięcia przycisuku wyświetla jego albumy pod formularzem.

 */

/* 14. Wyświetl w consoli następujące console.logi:
1. console.log('1')
2. setTimeout(() => console.log('2'), 300)
3. setTimeout(() => console.log('3'), 0)
4. new Promise((resolve, reject) => resolve('4')).then(resolve => console.log(resolve))
5. console.log('5')
6. setTimeout(() => console.log('6'), 0)
7. new Promise((resolve, reject) => resolve('7')).then(resolve => console.log(resolve))
8. console.log('8')
Zastanów się nad kolejnością ich wyświetlania.
 */



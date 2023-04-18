// Getting data from https://jsonplaceholder.typicode.com/users

// Promis chain
function getDataPromise() {
    return res = fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        if(res.ok) {
            return res;
        } else {
            throw new Error('Bad responnse from server');
        }
    })
    .then(res => res.json())
    .then(data => data);
}

// Wrapper for handling the promise
function handleResultPromise() {
    getDataPromise().then(res => {
        console.log(res);
    });
}

// Await version
async function getDataAwait() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok) throw new Error('Bad response from server');
    let users = await res.json();
    return users;
}

// Handel async getData
async function handleResultPromise() {
    try {
        let res = await getDataAwait();
        console.log(res);
    } catch(error) {
        console.log(error);
    }
}

// Will log a promise
//console.log(getDataAwait());

handleResultPromise();
handleResultPromise();
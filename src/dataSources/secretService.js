const localStorageKey = 'java-course-secret-storage';

const localService = Object.freeze({
    create: "http://localhost:5000/secret/create",
    update: "http://localhost:5000/secret/update",
    read: 'http://localhost:5000/secret/read',
    readAll: 'http://localhost:5000/secret/readAll'
});

const relativeService = Object.freeze({
    create: "/secret/create",
    update: "/secret/update",
    read: '/secret/read',
    readAll: '/secret/readAll',
})

const path = {...localService};

function isSecretOnStorage() {
    return localStorage.getItem(localStorageKey) != null;
}

function getSecretFromStorage() {
    let secret = {}
    try {
        secret = JSON.parse(localStorage.getItem(localStorageKey));
    } catch (e) {
        console.log(`[Error]: ${e}`);
    }
    return secret;
}

function setSecretStorage(secret) {
    localStorage.setItem(localStorageKey, JSON.stringify(secret));
    return secret;
}

async function create(secret) {
    const data = await fetch(path.create, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(secret)
    });

    const response = await data.json();
    return response;
}

async function update(secret) {
    const data = await fetch(path.update, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(secret)
    });

    const response = await data.text;
    return response;
}

async function read(id) {
    const data = await fetch(`${path.read}/${id}`);
    const response = await data.json()
    return response;
}

async function readAll() {
    const data = await fetch(path.readAll);
    const response = await data.json()
    return response
}

export {
    isSecretOnStorage,
    getSecretFromStorage,
    setSecretStorage,
    create,
    update,
    read,
    readAll,
}
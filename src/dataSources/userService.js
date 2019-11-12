import { getVideoStatistics, } from '../video/video';

const localStorageKey = 'java-course-user-storage';


const localService = Object.freeze({
    create: "http://localhost:5000/users/create",
    update: "http://localhost:5000/users/update",
    readAll: "http://localhost:5000/users/readAll",
});

const relativeService = Object.freeze({
    create: "/users/create",
    update: "/users/update",
    readAll: "/users/readAll",
});

const path = {...relativeService}

function isUserOnStorage() {
    return localStorage.getItem(localStorageKey) != null;
}

function getUserFromStorage() {
    let user = {}
    try {
        user = JSON.parse(localStorage.getItem(localStorageKey));
    } catch (e) {
        console.log(`[Error]: ${e}`);
    }
    return user;
}


function setUserStorage(user) {
    localStorage.setItem(localStorageKey, JSON.stringify(user));
    return user;
}

function updateWatchedVideos() {
    const user = getUserFromStorage();
    const videos = Object.keys(getVideoStatistics());
    user.watchedVideos = videos;
    setUserStorage(user);
    update(user);
}

function updateFavoriteVideo() {
    const user = getUserFromStorage();
    const videoStatistics = getVideoStatistics();
    const fav = { name: '', status: 0 }

    user.watchedVideos = Object.keys(videoStatistics);
    Object.entries(videoStatistics).forEach(([name, status]) => {
        if (status > fav.status) {
            fav.name = name;
            fav.status = status;
        }
    });
    user.favVideo = fav.name;
    setUserStorage(user);
    update(user);
}

async function create(user) {
    const data = await fetch(path.create, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
    });

    const response = await data.json();
    return response;
}


async function update(user) {
    const data = await fetch(path.update, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
    });
}



export {
    isUserOnStorage,
    setUserStorage,
    getUserFromStorage,
    updateWatchedVideos,
    updateFavoriteVideo,
    create,
    update,
}
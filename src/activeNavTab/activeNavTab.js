const localStorageKey = 'active-tab';

function setAtiveTabOnStorgae(tab) {
    localStorage.setItem(localStorageKey, tab);
}

function getActiveTabOnStorage() {
    return localStorage.getItem(localStorageKey);
}

export {
    setAtiveTabOnStorgae,
    getActiveTabOnStorage
}
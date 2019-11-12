const previousCodeAttribute = 'previuos-code';


function setPreviousCode(currentCode) {
    localStorage.setItem(previousCodeAttribute, JSON.stringify({ ...currentCode }));
}

function getPreviousCode() {
    return JSON.parse(localStorage.getItem(previousCodeAttribute));
}



export {
    setPreviousCode,
    getPreviousCode
}
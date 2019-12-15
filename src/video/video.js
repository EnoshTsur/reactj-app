const previousVideoAttribute = 'previuos-video';

function setPreviousVideo(currentVideo) {
    localStorage.setItem(previousVideoAttribute, JSON.stringify({...currentVideo}));
}

function getPreviousVideo() {
    return JSON.parse(localStorage.getItem(previousVideoAttribute));
}

export {
    setPreviousVideo,
    getPreviousVideo,
}
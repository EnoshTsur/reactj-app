const videoStatisicsAttribute = 'video-statisics';
const previousVideoAttribute = 'previuos-video';

function setVideoStatistics(updated) {
    localStorage.setItem(
        videoStatisicsAttribute,
        updated ? JSON.stringify(updated) :
            JSON.stringify({})
    );
    return {};
}

function getVideoStatistics() {
    return JSON.parse(localStorage.getItem(videoStatisicsAttribute));
}


function setPreviousVideo(currentVideo) {
    localStorage.setItem(previousVideoAttribute, JSON.stringify({...currentVideo}));
}

function getPreviousVideo() {
    return JSON.parse(localStorage.getItem(previousVideoAttribute));
}

function addWatch(text) {
    const videoStatistics = getVideoStatistics();
    videoStatistics[text] = (text in videoStatistics) ?
        videoStatistics[text] + 1 : videoStatistics[text] = 1;
    setVideoStatistics(videoStatistics);
}



export {
    setVideoStatistics,
    getVideoStatistics,
    addWatch,
    setPreviousVideo,
    getPreviousVideo,
}
import React from 'react'
import MoreIcon from '@material-ui/icons/ExpandMore'
import LessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button';
import { updateWatchedVideos, updateFavoriteVideo,} from '../../../dataSources/userService';
import { setPreviousVideo, } from '../../../video/video';
import { addWatch,} from '../../../video/video';

const iconStyle = {
    padding: '0 1rem',
}

function ExpendedList({ text, data, setCurrentVideo}) {

    const [isOpen, setOpen] = React.useState(false);

    function toggleOpen() { setOpen(!isOpen); }

    const setCurrent = (url, text) => setCurrentVideo(url, text);

    function handleClick(url, text) {
        setCurrent(url, text);
        try{
        addWatch(text);
        updateWatchedVideos();
        updateFavoriteVideo();
        } catch (e) {
            console.error(e);
        }
        setPreviousVideo({url, text});
    }

    return (
        <div style={{
            minWidth: '12rem'
        }}>
            <div
                onClick={toggleOpen}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                {isOpen ?
                    <LessIcon style={iconStyle} /> :
                    <MoreIcon style={iconStyle} />
                }
                <p>{text}</p>
            </div>
            {isOpen && data.map(videoObj => {
                return (
                    <Button
                        variant="text"
                        key={videoObj.text}
                        onClick={() => handleClick(videoObj.url, videoObj.text)}
                        style={{
                            display: 'block',
                            margin: '0.5rem 0',
                            minWidth: '100%',
                            fontFamily: "Varela Round, sans-serif",
                        }}>
                        {videoObj.text}
                    </Button>
                )
            })}
        </div>
    )
}

export default ExpendedList

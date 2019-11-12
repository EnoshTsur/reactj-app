import React from 'react'
import VideoMenu from './VideoMenu/VideoMenu';
import videos from '../../theme/videos';
import Video from './Video/Video';
import Button from '@material-ui/core/Button';
import { getPreviousVideo, } from '../../video/video'
import Radium from 'radium'

function VideoContainer() {

    const [currentVideo, setCurrent] = React.useState(videos.devIntroduction.intro)
    const [isOpen, setOpen] = React.useState(false);

    const primaryImageURL = 'https://murmuring-woodland-87073.herokuapp.com/primary';
    const primaryVideoText = 'מספר ראשוני';

    React.useEffect(() => {
        const previousVideo = getPreviousVideo();
        if (!previousVideo) return;
        setCurrent(previousVideo)
    }, [])

    const toggleOpen = () => setOpen(!isOpen);
    const setCurrentVideo = async (url, text) => {
        await setCurrent({ url, text });
        setOpen(false);
    }

    return (
        <div>

            <div style={{ textAlign: 'center' }}>
                <Button
                    variant="outlined"
                    style={{
                        marginTop: '3rem',
                        fontFamily: "Varela Round, sans-serif",
                    }}
                    onClick={() => toggleOpen()}
                >
                    תפריט
                </Button>

            </div>

            <VideoMenu
                videos={videos}
                isOpen={isOpen}
                toggleOpen={toggleOpen}
                setCurrentVideo={setCurrentVideo}
                currentVideo={currentVideo}
            />

            <Video
                src={currentVideo.url}
                title={currentVideo.text}
            />
            {
                currentVideo.text === primaryVideoText && (
                    <div style={{
                        textAlign: "center",
                        marginTop: '0.5rem',
                        marginBottom: '1rem',
                    }}>
                        <a style={{
                            textDecoration: 'none',
                            color: 'rgb(65, 85, 201)',
                            fontWeight: 700,
                            padding: '0.5rem 1rem',
                            borderRadius: '5px',
                            ':hover': {
                                color: 'darkblue',
                            }
                        }}
                            href={primaryImageURL}
                        >
                            לתמונה
                        </a>
                    </div>
                )
            }



        </div>
    )
}

export default Radium(VideoContainer)

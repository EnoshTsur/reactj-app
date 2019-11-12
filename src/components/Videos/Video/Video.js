import React from 'react'
import Iframe from 'react-iframe';


function Video({ src, title }) {

    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setMobile(mediaQuery.matches);
        mediaQuery.addListener((mq) => setMobile(mq.matches));
    }, []);

    return (
        <div style={{
            padding: '1rem',
            textAlign: 'center',
            fontFamily: 'Varela Round, sans-serif'
        }}>

            <h2
                style={{ fontFamily: 'Varela Round, sans-serif' }}
            >{title}
            </h2>

            {
                isMobile ? (
                    <Iframe url={src}
                        width="100%"
                        height="300rem"
                        display="initial"
                        position="relative"
                        allowFullScreen />

                ) : (
                        <Iframe url={src}
                            width="70%"
                            height="500rem"
                            display="initial"
                            position="relative"
                            allowFullScreen />
                    )

            }

        </div>
    )
}

export default Video

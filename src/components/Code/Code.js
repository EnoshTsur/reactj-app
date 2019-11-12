import React from 'react'
import CommonGist from '../CommonGist/CommonGist';


function Code({ src, title }) {

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
                    <div style={{
                        boxShadow: '0 4px 6px grey'
                    }}>
                        <CommonGist uri={src} />
                    </div>
                ) : (
                        <div style={{
                            boxShadow: '0 4px 6px grey',
                            maxWidth: '70%',
                            margin: '0 auto'
                        }}>
                            <CommonGist uri={src} />
                        </div>
                    )
            }

        </div>
    )
}

export default Code

import React from 'react';
import { getUserFromStorage, } from '../../dataSources/userService';
import { getEmojiByDayTime, } from '../../emojis/emojis';
import classes from './HomePage.module.css';

function Home() {

    const [username, setUsername] = React.useState('')

    const user = getUserFromStorage();
    React.useEffect(() => {
        const user = getUserFromStorage();
        if (user) {
            const name = user.name
            setUsername(name)
        }
    }, [])

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
            }}>
                {username} שלום <span
                    className={classes.Moon}
                >
                    {getEmojiByDayTime()}
                </span>
            </h1>

            <div style={{
                maxWidth: '70%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
                textAlign: 'right',
                fontFamily: "Varela Round, sans-serif"

            }}>
                <article style={{
                            fontFamily: "Varela Round, sans-serif"
                        }}>
                    <h3>חדשות</h3>
                    <hr />
                    <ol dir="rtl">
                        <li>סרטון חדש בנושא השיעורים באחרונים בספרינג </li><br/>
                        <li>סרטון חדש בנושא תכנות פונקציונלי </li>
                        
                    </ol>
                </article>
            </div>
        </div>
    )
}

export default Home


/*
 propetySource: {
            url: 'https://www.youtube.com/embed/W8oABAwTrIU',
            text: 'קובץ קונפיגורציה חיצוני'
        },
        restController: {
            url: 'https://www.youtube.com/embed/zx5VTUGemR0',
            text: 'רסט קונטרולר'
        },
        entities1: {
            url: 'https://www.youtube.com/embed/fnt1-wr1T6c',
            text: "ג'יי פי איי קונפיגורציה וטסטים"
        },
        entityManager: {
            url: 'https://www.youtube.com/embed/iwTzetLTEx0',
            text: "ג'יי פי איי אנטיטי מנג'ר"
        }
*/
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
                        <li>סרטון חדש בנושא טבלאות ג'וין</li>
                        <li>סרטון חדש בנושא מטלת הבית</li>
                        <li>סרטון חדש בנושא ג'יי די בי סי</li>
                        <li>שיעורי בית בנושא ג'יי די בי סי</li>
                    </ol>
                </article>
            </div>
        </div>
    )
}

export default Home

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
                textAlign: 'right'
            }}>
                <article>
                    <h3>חדשות</h3>
                    <hr />
                    <ol dir="rtl">
                        <li>שיעורי בית - משימה מדמה מבחן</li>
                        <br />
                        <li>סרטון חדש בנושא - מערך דו מימדי</li>
                        <br />
                        <li>סרטון חדש בנושא - אובייקטים</li>
                        <br/>
                        <li>קטעי קוד חדשים בנושא - מערך דו מימדי ואובייקטים</li>
                    </ol>
                </article>
            </div>
        </div>
    )
}

export default Home

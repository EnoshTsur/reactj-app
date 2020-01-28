import React from 'react';
import classes from './HomeWork.module.css';
import MoreIcon from '@material-ui/icons/ExpandMore'
import LessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button'
import { maxWidth } from '@material-ui/system';

const boxStyle = isMobile => ({

    boxShadow: isMobile ? 'unset' : '0 3px 4px 2px #ccc',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '5px',
    minWidth: isMobile ? 'unset' : '30rem'
});

function HomeWork() {
    const [isIntroOpen, setIntroOpen] = React.useState(false);
    const [isJavaBasicOpen, setJavaBasicOpen] = React.useState(false);
    const [isTaskExamOpen, setTaskExamOpen] = React.useState(false);
    const [isObjectMethods, setObjectMethods] = React.useState(false);
    const [isOopExamOpen, setOopExamOpen] = React.useState(false);
    const [isApiExamOpen, setApiExamOpen] = React.useState(false);

    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setMobile(mediaQuery.matches);
        mediaQuery.addListener((mq) => setMobile(mq.matches));
    }, []);

    const setOpenAndCloseOthers = setOpen => {
        [setIntroOpen,
            setJavaBasicOpen,
            setTaskExamOpen,
            setObjectMethods,
            setOopExamOpen,
            setApiExamOpen]
            .filter(setFunction => setFunction !== setOpen)
            .forEach(setFunction => setFunction(false))
        setOpen(true)
    }

    return (
        <div style={{
            textAlign: 'right',
            marginTop: '2rem',

        }}>
            <div style={{ display: 'inline-block' }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    textAlign: 'center',
                    minWidth: '100%'
                }}>
                    <Button onClick={() => {
                        setOpenAndCloseOthers(setIntroOpen)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isIntroOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> מבוא לתכנות</p>
                    </Button>

                    <Button onClick={() => {
                        setOpenAndCloseOthers(setJavaBasicOpen)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isJavaBasicOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> ג'אווה בייסיק</p>
                    </Button>
                    <Button onClick={() => {
                        setOpenAndCloseOthers(setTaskExamOpen)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isTaskExamOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> משימה לקראת מבחן</p>
                    </Button>
                    <Button onClick={() => {
                        setOpenAndCloseOthers(setObjectMethods)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isObjectMethods ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> אובייקטים ומתודות</p>
                    </Button>
                    <Button onClick={() => {
                        setOpenAndCloseOthers(setOopExamOpen)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isOopExamOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> מטלה אובג'קט אוריינטד</p>
                    </Button>
                    <Button onClick={() => {
                        setOpenAndCloseOthers(setApiExamOpen)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isApiExamOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> מטלה ג'אווה איי פי איי</p>
                    </Button>
                </div>
            </div>
            {isIntroOpen && (
                <div style={{
                    padding: '1rem',
                    textShadow: '0 0 2px 3px lightgrey'
                }}>
                    <ul className={classes.List}>
                        <li>עמוד 15 תרגילים 9 - 10</li>
                        <li>עמוד 17 תרגילים 4 - 6</li>
                        <li>עמוד 18 תרגילים 3 - 5</li>
                        <li>עמוד 20 תרגיל 4</li>
                        <li>עמוד 25 תרגילים 4 , 8</li>
                        <li>עמוד 25 תרגילים  12 - 15</li>
                        <li>עמוד 25 תרגילים  19 , 21 , 22</li>
                        <li>עמוד 29 תרגילים 3 - 6</li>
                        <li>עמוד 31 תרגילים 1-4</li>
                        <li>עמוד 32 תרגילים 5, 7, 8, 11, 12, 13</li>
                        <li>עמוד 33 תרגילים 15, 19</li>
                    </ul>
                </div>
            )}

            {isJavaBasicOpen && (
                <div style={{
                    padding: '1rem',
                    textShadow: '0 0 2px 3px lightgrey'
                }}>
                    <p>חוברת תרשימי זרימה</p>
                    <p>מההתחלה עד לתנאי מקונן</p>
                    <p>כמובן, באקליפס בג'אווה</p>
                </div>
            )}

            {isTaskExamOpen && (
                <div style={{
                    padding: '1rem',
                    textShadow: '0 0 2px 3px lightgrey'
                }}>
                    <p><strong>כתבו את משחק הקלפים מלחמה</strong></p>
                    <p>בתרגיל זה אין צורך בכל סדרות הקלפים</p>
                    <p>אתחלו שני מערכים שונים של אינטים עם עשרים ושישה תאים</p>
                    <p>כל תא יהיה ערך רנדומלי בין אפס לארבע עשרה</p>
                    <p>שני המערכים יהיו הקלפים של שני השחקנים</p>
                    <p>קלטו שמות עבור שני השחקנים</p>
                    <p>בכל סיבוב של המשחק, שני קלפים יתחרו</p>
                    <p>קלף שיהיה יותר גבוהה במספרו יזכה את אותו השחקן בנקודה</p>
                    <p>במקרה של תיקו, שני השחקנים ישלפו עוד שני קלפים והמנצח יזכה בשתי נקודות</p>
                    <p>בסוף המשחק כשנגמרו הקלפים, הכריזו על המנצח - זה עם הכי הרבה נקודות</p>
                    <p>לדוגמא: אבנר 27</p>

                    <br />
                    <p><strong>בונוס</strong></p>
                    <p>כתבו את הקלפים במערך דו מימדי</p>
                    <p>השכבה הראשונה תסמל את הסדרות אחד עד ארבע</p>
                    <p>השכבה השנייה תסמל את הקלפים אפס עד ארבע עשרה</p>
                    <p>שימו לב, תהיו חייבים לערבב את הקופסא לאחר יצירתה</p>
                    <p>ולחלק את הקופסא לשתי ידיים, של שני השחקנים</p>
                </div>
            )}

            {
                isObjectMethods && (
                    <div style={{
                        padding: '1rem',
                        textShadow: '0 0 2px 3px lightgrey'
                    }}>
                        <p><strong>צרו אובייקט שנקרא ArrayHandler</strong></p>
                        <p>האובייקט מכיל משתנה מסוג מערך</p>
                        <p>צרו קונסטרקטור שמקבל מערך ומאתחל את אותו המשתנה</p>
                        <p>צרו בנוסף קונסטרקטור ריק שמאתחל את המערך עם 10 מספרים רנדומליים</p>

                        <br />

                        <div style={{
                            padding: '0.5rem',
                            borderRadius: '5px',
                            boxShadow: '0 1px 7px lightgrey'
                        }}>
                            <p><strong>צרו מתודה שמחזירה בוליאן ונקראת isBalanced</strong></p>
                            <p>המתודה מקבלת אינט אינדקס</p>
                            <p>המתודה מחזירה, האם המערך מאוזן או לא בהתאם לאינדקס</p>

                            <p>זאת אומרת, מוודאה שסכום התאים עד לאינדקס שווה לסכום התאים מהאינדקס עד הסוף</p>
                        </div>

                        <br />

                        <div style={{
                            padding: '0.5rem',
                            borderRadius: '5px',
                            boxShadow: '0 1px 7px lightgrey'
                        }}>
                            <p><strong>צרו מתודה שמחזירה מערך ונקראת getDuplicates</strong></p>
                            <p>המתודה לא מקבלת כלום</p>
                            <p>המתודה מחזירה מערך חדש עם כל הכפילויות במערך של האובייקט עצמו</p>

                        </div>

                        <br />

                        <div style={{
                            padding: '0.5rem',
                            borderRadius: '5px',
                            boxShadow: '0 1px 7px lightgrey'
                        }}>
                            <p><strong>צרו מתודה שמחזירה אינט howManyIn</strong></p>
                            <p>המתודה מקבלת מערך</p>
                            <p>המתודה מחזירה כמה איברים במערך החדש קיימים גם המערך של אותו האובייקט</p>

                        </div>


                    </div>
                )
            },
            {
                isOopExamOpen && (
                    <div style={{
                        padding: '1rem',
                        textShadow: '0 0 2px 3px lightgrey'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            direction: 'rtl',
                        }}>
                            <div style={boxStyle(isMobile)}>
                                <p><strong>הכנה למטלת אובג'קט אוריינטד</strong></p>
                                <a target="_blank" href="https://github.com/EnoshTsur/Java-822-119/tree/master/BeforeTest/src">הפרויקט מהכיתה</a>
                                <br />
                                <p>אתחלו 4 וורקפלייס שונים בהתאם למחלקות</p>
                                <p>בכל אחד מהוורק פלייס, כל המשתנים מאותחלים עם ערכים</p>
                                <br />
                                <p>למשל וורק פלייס של קיו איי יהיה מאותחל עם מחלקת קיו איי</p>
                                <p>בוס קיו איי ומערך של עובדים</p>
                                <p>חשוב לציין כל המשכורות מאותחלות גם הן בערכים רנדומליים</p>
                                <p>תאחלו חברה עם שם, ועם כל הוורקפלייס שיצרתם קודם</p>

                            </div>

                            <div style={boxStyle(isMobile)}>
                                <p><strong>כתבו תוכנית המדפיסה את הנתונים הבאים</strong></p>
                                <br />
                                <p>ממוצע המשכורות של החברה</p>
                                <p>ממוצע המשכורות עבור כל מחלקה בנפרד, ואיזו מחלקה</p>
                                <p>מספר העובדים - כולל הבוס בני 22-32 והממוצע שלהם</p>
                                <p>מספר העובדים בני 34 ומעלה והממוצע שלהם</p>
                                <p>ממוצע המשכורות של של הבוסים של כל המחלקות</p>
                                <p>שם העובד הכי נפוץ</p>
                                <p>העובד הכי מבוגר עם ממוצע המשכורות הכי גבוה</p>
                                <p>העובד הכי צעיר עם ממוצע המשכורות הכי גבוה</p>
                            </div>
                            <div style={boxStyle(isMobile)}>
                                <p><strong>משכורות</strong></p>
                                <br />
                                <p>עובד פיתוח 14000 - 18000</p>
                                <p>עובד קיו איי 8000 - 12000</p>
                                <p>עובד גרפיקה - 12000 - 15000</p>
                                <p>עובד אייטצ אר 11000- 13000</p>
                                <br />
                                <p>בוס פיתוח 30000 - 32000</p>
                                <p>בוס קיו איי 14000 - 18000</p>
                                <p>בוס גרפיקה 16000 - 19000</p>
                                <p>בוס אייטצ אר 15000 - 17000</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                isApiExamOpen && (
                    <div>
                        <div style={{ marginRight: '1rem' }}>
                            <p><strong>כתבו שעון מעורר למאור</strong></p>
                            <br />
                            <p>על התוכנית להתריע את מאור שמגיעה שעת התזכורת</p>
                            <p>זאת אומרת, כל עוד עכשיו בין התחלת התזכורת וסופה</p>
                            <p>וכל עוד, מאור לא צפה בתזכורת</p>
                            <p>מאור יוכל לצפות בכל התזכורות ממוינות מהשעה המוקדמת ביותר</p>
                            <p>להוסיף תזכורת חדשה בכל עת</p>
                            <p>ולסיים את הריצה</p>
                            <br />
                        </div>


                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            direction: 'rtl',
                        }}>
                            <div style={{...boxStyle(isMobile), textAlign: 'left', direction: 'rtl'}}>
                                <h3>Reminder implements Comparable</h3>
                                <hr />
                                <p>- start: LocalTime</p>
                                <p>- stop: LocalTime</p>
                                <p>- message: String</p>
                                <p>- seen: boolean</p>
                                <hr />
                                <p>+ Reminder(time, message) seen = false</p>
                                <p>+ getters & setters</p>
                                <p>+ to string</p>
                                <p>+ hascode & equals</p>
                                <p>+ compareTo</p>
                                <p></p>
                            </div>
                            <div style={{...boxStyle(isMobile), textAlign: 'left', direction: 'rtl'}}>
                                <h3>ReminderTask implements Runnable</h3>
                                <hr />
                                <p>- reminders: Set - Reminder</p>
                                <hr />
                                <p>+ ReminderTask(reminders)</p>
                                <p>+ getters & setters</p>
                                <p>+ run</p>
                                <p></p>
                            </div>
                            <div style={{...boxStyle(isMobile), textAlign: 'left', direction: 'rtl'}}>
                                <h3>ReminderSystem</h3>
                                <hr />
                                <p>- task: ReminderTask</p>
                                <p>- thread: Thread</p>
                                <hr />
                                <p>+ ReminderSystem() initial 4 task reminders, task, thread</p>
                                <p>+ getters & setters</p>
                                <p>+ getReminders: sorted List Reminder</p>
                                <p>+ addReminder: boolean isSuccess</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default HomeWork

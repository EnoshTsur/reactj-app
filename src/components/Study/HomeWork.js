import React from 'react';
import classes from './HomeWork.module.css';
import MoreIcon from '@material-ui/icons/ExpandMore'
import LessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button'


function HomeWork() {
    const [isIntroOpen, setIntroOpen] = React.useState(false);
    const [isJavaBasicOpen, setJavaBasicOpen] = React.useState(false);
    const [isTaskExamOpen, setTaskExamOpen] = React.useState(false);
    const [isObjectMethods, setObjectMethods] = React.useState(false);

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
                        setJavaBasicOpen(false);
                        setTaskExamOpen(false)
                        setObjectMethods(false)
                        setIntroOpen(true)
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
                        setIntroOpen(false)
                        setTaskExamOpen(false)
                        setObjectMethods(false)
                        setJavaBasicOpen(true)
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
                        setIntroOpen(false)
                        setJavaBasicOpen(false)
                        setObjectMethods(false)
                        setTaskExamOpen(true)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isJavaBasicOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> משימה לקראת מבחן</p>
                    </Button>
                    <Button onClick={() => {
                        setIntroOpen(false)
                        setJavaBasicOpen(false)
                        setTaskExamOpen(false)
                        setObjectMethods(true)
                    }}
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                            fontSize: '16px'
                        }}>
                        {isJavaBasicOpen ? <LessIcon /> : <MoreIcon />}
                        <p style={{
                            padding: '0.5rem'
                        }}> אובייקטים ומתודות</p>
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

                        <br/>

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

                        <br/>

                        <div style={{
                            padding: '0.5rem',
                            borderRadius: '5px',
                            boxShadow: '0 1px 7px lightgrey'
                        }}>
                        <p><strong>צרו מתודה שמחזירה מערך ונקראת getDuplicates</strong></p>
                        <p>המתודה לא מקבלת כלום</p>
                        <p>המתודה מחזירה מערך חדש עם כל הכפילויות במערך של האובייקט עצמו</p>

                        </div>

                        <br/>

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
            }
        </div>
    )
}

export default HomeWork

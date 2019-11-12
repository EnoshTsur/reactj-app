import React from 'react';
import classes from './HomeWork.module.css';
import MoreIcon from '@material-ui/icons/ExpandMore'
import LessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button'


function HomeWork() {
    const [isIntroOpen, setIntroOpen] = React.useState(false);
    const [isJavaBasicOpen, setJavaBasicOpen] = React.useState(false);

    return (
        <div style={{
            textAlign: 'right',
            marginTop: '2rem',

        }}>
            <div style={{ display: 'inline-block' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    textAlign: 'center',
                    minWidth: '100%'
                }}>
                    <Button onClick={() => {
                        setJavaBasicOpen(false);
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
        </div>
    )
}

export default HomeWork

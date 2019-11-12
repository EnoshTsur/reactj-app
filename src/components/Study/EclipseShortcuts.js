import React from 'react'
import Commands from './Commands';

const containerMiscStyles = Object.freeze({
    backgroundColor: 'white',
    boxShadow: '0 4px 6px grey'
});

const lines = Object.freeze([
    ["Ctrl + Space", "השלמת קוד"],
    ["Ctrl + 1", "הצעות תיקון"],
    ["Alt + Shit + Down", "סימון מילה, שורה וכו"],
    ["Ctrl + Alt + Down", "שכפול שורה"],
    ["Ctrl + D", "מחיקת שורה"],
    ["Alt + Shift + A", "עריכת כמה שורות במקביל"],
    ["Alt + Down / Up", "הזזת שורה למטה או למעלה"],
    ["Alt + Shift + R", "שינוי שם של משתנה או קלאס בכל המקומות"],
    ["Ctrl + Shift + Down / Up", "מעבר בין שמות של משתנים מתודות וקלאס"]

]);

function EclipseShortcuts() {
    return (
        <div>
            <Commands
                containerMiscStyles={containerMiscStyles}
                leftColorText="black"
                rightColorText="purple"
                textMiscStyles={{
                    textShadow: '0 1px 2px black'
                }}
                lines={lines}
            />
        </div>
    )
}

export default EclipseShortcuts

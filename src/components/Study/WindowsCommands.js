import React from 'react'
import Commands from './Commands';

function textPath(text) {
    return `C://> ${text}`;
} 

const lines = Object.freeze([
    [textPath('D:'), 'שינוי כונן'],
    [textPath('dir'), 'מציג את תוכן התיקייה'],
    [textPath('cd <path>'), 'שינוי את מיקום הקונסול'],
    [textPath('cd ../'), 'חוזר תיקייה אחורה'],
    [textPath('cd ../../'), 'חוזר שתי תיקיות אחורה'],
    [textPath('mkdir <name>'), 'יצירת תיקייה במיקום הקונסול'],
    [textPath('rmdir <name>'), 'מוחק תיקייה בתנאי שהיא ריקה'],
    [textPath('rmdir /s'), 'מוודא ומוחק תיקייה וגם את התוכן שלה'],
    [textPath('del <name>'), 'מוחק קובץ'],
    [textPath('echo <message>'), 'מציג הודעה למסך'],
    [textPath('echo <content> > <filename>'), 'יוצר קובץ עם התוכן']
])
function WindowsCommands() {
    return (
       
            <Commands lines={lines} />
    )
}

export default WindowsCommands

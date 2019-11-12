import React from 'react'
import Commands from './Commands';

function gitStart(text) {
    return `git ${text}`;
} 

const lines = Object.freeze([
    [gitStart('init'), 'מאתחל ריפוזיטורי של גיט באותה תיקייה'],
    [gitStart('clone <path>'), 'מוריד ריפוזיטורי של גיט למחשב'],
    [gitStart('status'), 'מציג את מצב הקבצים בריפוזיטורי'],
    [gitStart('status --short'), 'מציג את מצב הקבצים בריפוזיטורי בקצרה'],
    [gitStart('clean -df'), 'מסיר קבצים שלא במעקב של גיט'],
    [gitStart('add <filename>'), 'מוסיף את הקובץ למעקב של גיט'],
    [gitStart('add .'), 'מוסיף את כל הקבצים למעקב של גיט'],
    [gitStart('rm --cached <filename>'), 'מסיר קובץ מהמעקב של גיט'],
    [gitStart('rm --cached -r .'), 'מסיר את כל הקבצים מן המעקב של גיט'],
    [gitStart('commit -m "<message>"'), 'שומר את השינויים עם איידי והודעה'],
    [gitStart('reflog'), 'מציג את הפעולות - קומיט שעשינו'],
    [gitStart('remote add origin <path>'), 'מוסיף שרת חיצוני לאותו ריפוזיטורי'],
    [gitStart('remote -v'), 'מציג מול איזה שרת חיצוני אנחנו עובדים'],
    [gitStart('push -u origin master'), 'דוחף שינויים בפעם הראשונה לשרת מרוחק'],
    [gitStart('push'), 'דוחף שינויים אחרי הפעם הראשונה'],
    [gitStart('pull'), 'מושך עדכונים משרת מרוחק'],
    [gitStart('reset --hard <commitId>'), 'חוזר אחורה לקומיט ספציפי']
])
function GitCommands() {
    return (
       
            <Commands lines={lines} />
    )
}

export default GitCommands

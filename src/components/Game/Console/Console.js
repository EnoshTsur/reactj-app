import React from 'react'
import { getRandomItemFromArray, deleteFunction, } from '../../../theme/utils';
import log from '../../../theme/consoleScript';

const openUpConsole = [
    "Open up your console",
    "Check out your console",
    "Your console must be missing you",
    "You got a phone call, ring ring it's console!",
    "What's behind you? your console",
    "It's console time!"
]

function Console({
    commands,
    rightAnswer,
    predicate,
    setCurrentPhase,
    currentPhase,
    hints 
}) {
    console.clear();
    commands.forEach(commands => commands());

    window.answer = function (userAnswer) {
        if (rightAnswer) {
            if (userAnswer === rightAnswer) {
                deleteFunction('answer');
                setCurrentPhase(currentPhase + 1)
                return;
            }

        } else if (predicate) {
            if (predicate(userAnswer)) {
                deleteFunction('answer');
                setCurrentPhase(currentPhase + 1)
                return;
            }
        }
        try{
            log._crystal(getRandomItemFromArray(hints));
        } catch(e) {
            console.log(e);
            
        }
    }
    return (
        <div>
            <h2 style={{
                textAlign: 'center',
                color: '#0a0a10',
                fontFamily: 'Architects Daughter, cursive'
            }}>{getRandomItemFromArray(openUpConsole)}</h2>
        </div>
    )
}

export default Console

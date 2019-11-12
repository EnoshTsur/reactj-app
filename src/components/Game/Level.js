import * as React from 'react';
import Console from './Console/Console';
import Phase from './Phases/Phase';

function Level({ allLevels, currentPhase, setCurrentPhase, username }) {
    const consoleIndexes = [7, 8, 10, 12, 14, 15]
    const index = currentPhase === 0 ? currentPhase : currentPhase - 1;
    
    if ( index >= allLevels.length) return null;

    return consoleIndexes.includes(index) ? (
        <Console
            commands={allLevels[index].commands}
            rightAnswer={allLevels[index].rightAnswer}
            predicate={allLevels[index].predicate}
            hints={allLevels[index].hints}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
        />
    ) : (
            <Phase
                codeDescription={allLevels[index].codeDescription}
                codeLines={allLevels[index].codeLines}
                username={username}
                setCurrentPhase={setCurrentPhase}
                currentPhase={currentPhase}
            />
        )
}

export default Level;
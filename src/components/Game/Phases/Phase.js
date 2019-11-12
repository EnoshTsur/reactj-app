import React from 'react';
import Alert from '../Alert/Alert';
import Code from '../Code/Code';
import { navigateTo, deleteFunction, isBoolean, } from '../../../theme/utils';
import log from '../../../theme/consoleScript';
import { phases, } from '../../../theme/theme';


function Phase1({
    username,
    codeLines,
    codeDescription,
    currentPhase,
    setCurrentPhase,
}) {
    console.clear();

    const [isAlertOut, setAlertOut] = React.useState(false);
    const [isSuccessAlert, setSuccessAlert] = React.useState(false);

    const navigateToVideos = navigateTo('videos')


    window.next = function (isReady) {
        if (arguments.length > 0 && !isBoolean(isReady)) {
            log._stupid(`${username} seriously?! only true or false.`)
            console.log("You can't re declare const, so...")
            console.log("Create a new variable (isReady2 for example)")
            console.log("Set it to true or false only!");
            log._pizza("And call me again if you got some booleans for me..")
            return;
        }

        if (arguments.length > 0 && !isReady) {
            setAlertOut(true);
            return;
        }

        (currentPhase === 1) && log._gohst('There is a previous too..');
        const phasesSize = Object.keys(phases(username)).length;
        if( currentPhase <= phasesSize) {
            setSuccessAlert(true);
        }
    }


    return (
        <div>
            {
                isAlertOut && (
                    <Alert
                        isAlertOpen={isAlertOut}
                        isError
                        callback={() => {
                            setAlertOut(false);
                            deleteFunction('next')
                            navigateToVideos();

                        }}
                    />
                )
            }
            
                    <div>
                        <Code lines={codeLines} />
                        <h3 style={{
                            textAlign: 'center',
                            color: '#0a0a10',
                            fontFamily: 'Architects Daughter, cursive'

                        }}>
                            {codeDescription}
                        </h3>
                    </div>
            
            {
                isSuccessAlert && (
                    <Alert
                        isAlertOpen={isSuccessAlert}
                        callback={() => {
                            setSuccessAlert(false);
                            deleteFunction('previous')
                            deleteFunction('next')
                            setCurrentPhase(currentPhase + 1);

                        }}
                    />
                )
            }
            {
                
        }

        </div>
    )
}

export default Phase1

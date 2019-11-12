import React from 'react'
import Alert from './Alert/Alert';
import { navigateTo, deleteFunction, isBoolean, } from '../../theme/utils';
import log from '../../theme/consoleScript';
import { phases, } from '../../theme/theme';
import { isUserOnStorage, getUserFromStorage, } from '../../dataSources/userService';
import {
    create,
    update,
    isSecretOnStorage,
    getSecretFromStorage,
    setSecretStorage,
} from '../../dataSources/secretService';
import Secret from '../../entity/Secret';
import End from './End/End';
import BlackConfirm from '../BlackAlert/BlackConfirm';
import BlackAlert from '../BlackAlert/BlackAlert';
import Level from './Level';


const firstQuestion = () => {
    console.clear();
    log._swords('Hello im glad you are here, i need your help!')
    console.log('I have lost my JavaScript language...')
    console.log('Can you help me?')
    console.log("For yes write start(true),For no start(false)")
}

function setPreviousPhaseOnLocalStorgae(phase) {
    localStorage.setItem('previuos-phsae', phase);
}

function getPreviousPhaseFromLocalStorage(phase) {
    return localStorage.getItem('previuos-phsae');
}

function addSecretsOrUpdate(currentPhase) {
    try {
        if (isUserOnStorage()) {
            const user = getUserFromStorage()
            if (isSecretOnStorage()) {
                const secret = getSecretFromStorage();
                if (currentPhase > secret.level) {
                    const updated = new Secret(user.name, user._id, currentPhase);
                    updated._id = secret._id;
                    update(updated);
                    setSecretStorage(updated);
                }
            } else {
                const secret = new Secret(user.name, user._id, currentPhase);
                create(secret).then(user => {
                    secret._id = user;
                    setSecretStorage(secret);
                });
            }
        }
    } catch (e) {
        console.error(e);
    }
}

const getUserName = () => !!JSON.parse(localStorage.getItem('java-course-user-storage')) ?
    JSON.parse(localStorage.getItem('java-course-user-storage')).name : '';

function Game() {

    const [isNo, setNo] = React.useState(false);
    const [isLevel, setIsLevel] = React.useState(false);
    const [isYes, setYes] = React.useState(false);
    const [isWelcome, setWelcome] = React.useState(true);
    const [isMobile, setMobile] = React.useState(false);
    const [currentPhase, setCurrentPhase] = React.useState(0);
    const [isBlackConfirm, setBlackConfirm] = React.useState(false);
    const [isBlackAlert, setBlackAlert] = React.useState(false);

    const navigateToVideos = navigateTo('videos');

    const username = getUserName();

    const allLevels = Object.values(phases(username));

    const phasesSize = Object.keys(phases(username)).length;

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setMobile(mediaQuery.matches);
        mediaQuery.addListener((mq) => setMobile(mq.matches));
        if (isMobile) {
            console.clear();
            navigateToVideos()
        }
        firstQuestion()
    }, [isMobile]);

    React.useEffect(() => {
        if (currentPhase <= 0) {
            setWelcome(true)
            setIsLevel(false)
        } else {
            setWelcome(false)
            setIsLevel(true)
        }
        currentPhase === 1 && setBlackAlert(true)
        addSecretsOrUpdate(currentPhase);
        currentPhase > 0 && setPreviousPhaseOnLocalStorgae(currentPhase);
    }, [currentPhase])

    React.useEffect(() => {
        if (isSecretOnStorage) {
            const level = getPreviousPhaseFromLocalStorage();
            level > 0 && setBlackConfirm(true);
        }
    }, []);


    /***
     * Very first function
     */
    window.start = function (answer) {
        if (!isBoolean(answer)) {
            log._stupid(`${answer} is not a boolean... only true or false please...`);
            return;
        }
        answer ? setYes(true) : setNo(true);
    }

    /**
     * Go To Phase
     */
    window.goToPhase = function (number) {
        if (typeof number !== 'number' || (number > phasesSize || number <= 0)) {
            log._stupid(`Why?! there is no phase ${number} phaseSize: ${phasesSize}`)
            return;
        }
        setWelcome(number === 0);
        setCurrentPhase(number);
    }

    /**
     * Next without alerts
     */
    window.fastNext = function () {
        // if (currentPhase + 1 > phasesSize) return;
        setWelcome(false);
        setCurrentPhase(currentPhase + 1);
    }

    window.reload = function () {
        window.fastNext()
        window.previous()
    }

    window.previous = function () {
        if (currentPhase === 1) {
            log._ufo('Where do you want to go?!');
            return;
        }
        setCurrentPhase(currentPhase - 1);
    }

    /**
     * Close Alert
     */
    function handleClose() {
        setWelcome(false);
        deleteFunction('start')

        if (isNo) {
            setNo(false);
            navigateToVideos();
        }
        if (isYes) {
            setYes(false)
            setCurrentPhase(1);
        }
    }


    return (
        <div>
            {
                isWelcome && (
                    <h2 style={{
                        color: 'white',
                        textShadow: ' 0 2px 3px lightgrey',
                        textAlign: 'center',
                    }}>
                        In order to continue, open Chrome console.
                    </h2>
                )
            }
            {
                isBlackConfirm && (
                    <BlackConfirm
                        text="Do you want to continue from last time?"
                        setBlackConfirm={() => setBlackConfirm(false)}
                        millis={4000}
                        onYes={() => {
                            const level = getPreviousPhaseFromLocalStorage()
                            setCurrentPhase(Number(level));
                            setBlackConfirm(false);
                            setWelcome(false);
                        }}
                    />
                )
            }
            {
                isBlackAlert && (
                    <BlackAlert
                        setBlackAlert={() => setBlackAlert(false)}
                        text="You can 'previuos()' too! &#128373;"
                        millis={4000}
                    />
                )
            }

            <Alert
                isError
                callback={handleClose}
                isAlertOpen={isNo}
            />

            <Alert
                callback={handleClose}
                isAlertOpen={isYes}
            />
            {
                isLevel && (
                    <Level
                        allLevels={allLevels}
                        currentPhase={currentPhase}
                        setCurrentPhase={setCurrentPhase}
                        username={username}
                    />
                )
            }
            {
                (currentPhase > phasesSize) && (
                    <End />
                )
            }


        </div>
    )
}

export default Game

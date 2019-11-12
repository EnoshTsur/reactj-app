import React from 'react'
import Clear from '@material-ui/icons/Clear';
import Dialog from '../../../UI/Dialog/Dialog';
import classes from './Alert.module.css'
import { deleteFunction, getRandomItemFromArray, } from '../../../theme/utils';
import { alertMessages, } from '../../../theme/theme';
import questionMark from '../../../assets/questionMark.png';
import gifLady from '../../../assets/giflady.gif';
import Radium from 'radium'

function containerColorsStyle(isError, top, left) {
    return {
        top,
        left,
        backgroundColor: isError ? '#ff6666' : '#c4a4ff',
        borderBottom: isError ? '1.5px solid #e60000' : '1.5px solid #624696',
        borderRight: isError ? '1.5px solid #e60000' : '1.5px solid #624696',
        borderTop: isError ? '1.5px solid #ffcccc' : '1.5px solid #e3d3ff',
        borderLeft: isError ? '1.5px solid #ffcccc' : '1.5px solid #e3d3ff'
    }
}

function imageStyle(isError) {
    return {
        maxWidth: isError ? '4rem' : '3.5rem',
        maxHeight: '3.5rem',
        borderTop: isError ? '1px solid #ffcccc' : '1px solid #e3d3ff',
        borderLeft: isError ? '1px solid #ffcccc' : '1px solid #e3d3ff',
        borderRight: isError ? '2px solid #e60000' : '2px solid #624696',
        borderBottom: isError ? '2px solid #e60000' : '2px solid #624696',
    }
}

function buttonStyle(isError) {
    return {
        borderTop: isError ? '1px solid #ffcccc' : '1px solid #e3d3ff',
        borderLeft: isError ? '1px solid #ffcccc' : '1px solid #e3d3ff',
        borderRight: isError ? '2px solid #e60000' : '2px solid #624696',
        borderBottom: isError ? '2px solid #e60000' : '2px solid #624696',
        backgroundColor: isError ? '#ff6666' : '#c4a4ff',
        ':hover': {
            backgroundColor: isError ? '#ff4d4d' : '#d9c5fd'
        },
        ':focus': {
            borderTop: isError ? '1px solid #e60000' : '1px solid #e3d3ff',
            borderLeft: isError ? '1px solid #e60000' : '1px solid #e3d3ff',
            borderRight: isError ? '2px solid #ffcccc' : '2px solid #624696',
            borderBottom: isError ? '2px solid #ffcccc' : '2px solid #624696',
        }
    }
}

function Alert({
    isError,
    callback,
    isAlertOpen,
}) {

    const [top, setTop] = React.useState(200);
    const [left, setLeft] = React.useState(500);
    const [text, setText] = React.useState('');

    const alert = React.useRef(null);

    React.useEffect(() => {
        setText(
            isError ?
                getRandomItemFromArray(alertMessages.failure) :
                getRandomItemFromArray(alertMessages.success)
        );
    }, [])

    const title = isError ?
        "[1990's Error Message]" :
        "[1990's Informative Message]";

    const titleColors = {
        rightColor: isError ? '#99000f' : '#b3d1ff',
        leftColor: isError ? '#ff6675' : '#003380',
    }

    const isMarquee = (Math.floor(Math.random() * 2) === 1)

    return isAlertOpen && (
        <Dialog show>
            <div
                draggable
                className={classes.Container}
                style={containerColorsStyle(isError, top, left)}
                ref={alert}
                onDrag={event => {

                    const x = event.clientX;
                    const y = event.clientY;
                    event.preventDefault();
                    setTop(y)
                    setLeft(x);
                }}
                onDragOver={event => event.preventDefault()}
                onDragEnd={event => event.preventDefault()}>
                <div className={classes.TopStrip} style={{
                    background: `linear-gradient(to left, ${titleColors.rightColor}, ${titleColors.leftColor})`
                }} >

                    {
                        isMarquee ? (
                            <marquee behavior="alternate" direction="right">
                                <p>
                                    {title}
                                </p>
                            </marquee>
                        ) : (
                                <p>{title}</p>
                            )
                    }

                    <button disabled className={classes.Close}>
                        <Clear style={{
                            maxWidth: '1rem',
                            maxHeight: '1rem',
                            marginTop: '0.2rem'
                        }} />
                    </button>

                </div>
                <div style={{ textAlign: 'center', display: 'flex', padding: '0.5rem', alignItems: 'center' }}>
                    <img src={isError ? gifLady : questionMark} alt="Message" style={imageStyle(isError)} />
                    <p>{text}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button style={buttonStyle(isError)} className={classes.Ok} onClick={() => {
                        deleteFunction('answer');
                        callback && callback();
                    }}>
                        OK
                        </button>
                </div>
            </div>
        </Dialog>
    )
}

export default Radium(Alert)

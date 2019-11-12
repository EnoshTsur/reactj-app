import React from 'react'
import Button from '@material-ui/core/Button'

function BlackConfirm({ text, setBlackConfirm, onYes, millis }) {

    setTimeout(() => setBlackConfirm(false), millis);

    return (
        <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '2rem',
            borderRadius: '5px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-100px', 
            marginLeft: '-250px',
            zIndex: 4,
        }}>
            <p style={{ color: 'white' }}>{text}</p>
            <div style={{
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}
                >
                    <Button
                        variant="text"
                        style={{ color: 'salmon', }}
                        onClick={setBlackConfirm}>
                        No
                </Button>
                    <Button
                        variant="text"
                        style={{ color: 'lightgreen', }}
                        onClick={onYes}>
                        Yes
                </Button>
                </div>
            </div>
        </div>
    )
}

export default BlackConfirm

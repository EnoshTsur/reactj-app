import React from 'react'
import Button from '@material-ui/core/Button'

function BlackAlert({ text, setBlackAlert, millis }) {

    setTimeout(() => setBlackAlert(false), millis);

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
            zIndex: 3,
        }}>
            <p style={{ color: 'white' }}>{text}</p>
            <div style={{
                textAlign: 'center'
            }}>
                <Button
                variant="text"
                 style={{ color: 'salmon', }} 
                 onClick={setBlackAlert}>
                    Close
                </Button>
            </div>
        </div>
    )
}

export default BlackAlert

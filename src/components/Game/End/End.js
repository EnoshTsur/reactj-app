import React from 'react'
import { readAll, } from '../../../dataSources/secretService';

function withoutEnosh(player) {
    if (!player || !player.name) return false;
    const lower = player.name.toLowerCase();
    return (!lower.includes('enosh') && !lower.includes('אנוש') && !lower.includes('taw'));
}

function End() {
    console.clear();
    const [players, setPlayers] = React.useState(null);

    React.useEffect(() => {
        try {
            readAll().then(data => {
                const filtered = data.filter(withoutEnosh);
                setPlayers(filtered);
            })
        } catch (e) {
            setPlayers([])
        }
    }, [])

    return (players && players.length > 0) ? (
        <>
            <h1 style={{
                textAlign: 'center'
            }}>Table Score:</h1>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: '#e6e6ff',
                justifyContent: 'space-evenly',

            }}>

                {
                    players.map(player => (
                        <div
                        key={player._id}
                         style={{
                            flexGrow: 1,
                            margin: '1rem',
                            backgroundColor: '#b3b3ff',
                            minWidth: '5rem',
                            padding: '1rem',
                            borderRadius: '5px',
                            boxShadow: '3px 4px 6px lightgrey'
                        }}>
                            <h3>{player.name}</h3>
                            <p><strong>Score: </strong>{player.level}</p>
                        </div>
                    ))
                }
            </div>
        </>
    ) : (
            <h1 style={{
                textAlign: 'center'
            }}>No Players yet :( </h1>
        )
}

export default End

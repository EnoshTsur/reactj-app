import React from 'react'
import classes from './Code.module.css';

const containerStyle = {
    backgroundColor: '#0a0a10',
    padding: '1rem',
    display: 'inline-block',
    textAlign: 'left',
    boxShadow: '0 5px 7px grey'
}
const listStyle = {
    listStyle: 'none',
    color: 'white',
    fontFamily: "monospace",
    fontSize: '16px'
}

const colors = {
    'const': '#e67300',
    'let': '#e67300',
    'var': '#e67300',
    'return': '#e6005c',
    '=': '#e6005c',
    '==': '#e6005c',
    '===': '#e6005c',
    '!': '#e6005c',
    '!=': '#e6005c',
    '!==': '#e6005c',
    '<': '#e6005c',
    '<=': '#e6005c',
    '>': '#e6005c',
    '>=': '#e6005c',
    '&&': '#e6005c',
    '||': '#e6005c',
    '+': '#e6005c',
    '-': '#e6005c',
    '/': '#e6005c',
    '*': '#e6005c',
    '%': '#e6005c',
    '?': '#e6005c',
    ':': '#e6005c',
    'typeof': '#e6005c',
    'function': '#80d4ff',
    '{': '#80d4ff',
    '}': '#80d4ff',
    'true': '#cc66ff',
    'false': '#cc66ff',
}
const numbersColor = '#cc66ff';

function Word({ word, line, outerIndex, }) {

    const [isComment, setComment] = React.useState(false);
    React.useEffect(() => {
        line.startsWith('//') && setComment(true);
    }, []);

    const zeroToNineRange = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const indexOfSlash = line.indexOf('//');
    const isTemplateVar = word.startsWith('${') && (word.endsWith('}') || word.includes('}'));
  
    

    return word.split('').map((letter, innerIndex) => {

        return (line.includes('//') && !line.startsWith('//')) ?
            <span
                key={`a${letter}${outerIndex}${innerIndex}${(Math.random() + Math.random())}`}
                style={{
                    color: (word === 'legal') ? '#00ff99' : (word === 'illegal') ? 'red' :
                        (line.indexOf(word) >= indexOfSlash && indexOfSlash !== -1) ? 'grey' :
                            (zeroToNineRange.includes(letter) && !word.match(/[a-z,A-Z]/i)) ?
                                numbersColor :
                                isTemplateVar ? '#80d4ff' :
                                        Object.keys(colors).includes(word) ? colors[word] :
                                            'lightgrey'
                }}>
                {letter}
            </span>
            : (
                <span key={`${letter}${innerIndex}${outerIndex}${(Math.random() + Math.random())}`} style={{
                    color: isComment ? 'grey' :
                        (zeroToNineRange.includes(letter) && !word.match(/[a-z,A-Z]/i)) ?
                            numbersColor :
                            isTemplateVar ? '#80d4ff' :
                                    Object.keys(colors).includes(word) ? colors[word] :
                                        'lightgrey',
                }}
                >
                    {letter}
                </span>
            )
    })
}

function Line({ line, index }) {
    const space = " ";
    return (
        <li key={line} style={{
            padding: '0.2rem'
        }}>
            <span style={{
                backgroundColor: '#333333',
                padding: '0.2rem 0.2rem 0.2rem 1rem',
                color: 'lightgrey',
                fontVariantNumeric: 'tabular-nums',
            }}>{(index + 1)}</span>
            <span style={{ marginLeft: '1rem' }}>
                {
                    line.split(' ').map((word, innerIndex) => {
                        word = word.trim();
                        return (
                            <span key={`${innerIndex}${word}${(Math.random() + Math.random())}`}>
                                <Word
                                    word={word}
                                    line={line}
                                    outerIndex={index}

                                />
                                {space}
                            </span>
                        )
                    }
                    )
                }
            </span>
        </li>
    )
}


function Code({ lines, }) {

    return (
        <div className={classes.Container} style={{ textAlign: 'center', margin: '2rem 0', }}>
            <div style={containerStyle}>
                <ul style={listStyle}>
                    {
                        lines.map(
                            (line, index) => (
                                <Line
                                    key={`${line}${(Math.random() + Math.random())}`}
                                    line={line}
                                    index={index}
                                />
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Code

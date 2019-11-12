import React from 'react'
import classes from './Commands.module.css';

function Commands({ lines, containerMiscStyles, leftColorText, rightColorText, textMiscStyles,  }) {
    return (
        <div className={classes.Container} style={{...containerMiscStyles}}>
            {
                lines.map(line => (
                    <div className={classes.Commands}>
                        {
                            line.map((text, index) => (

                                <span
                                    style={{
                                        padding: '0.5rem 1rem',
                                        margin: 0,
                                        color: (!!leftColorText && !!rightColorText) ?
                                         (index === 0 ? leftColorText : rightColorText) :
                                         (index === 0 ?  '#e6e6e6' : '#b3b3b3'),
                                        textShadow: '0 1px 2px white',
                                        textOverflow: 'clip',
                                        whiteSpace: 'nowrap',
                                        ...textMiscStyles
                                    }}
                                    key={text}
                                >
                                    {text}
                                </span>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )

}


export default Commands
import React from 'react'
import MoreIcon from '@material-ui/icons/ExpandMore'
import LessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button';
import { setPreviousCode, } from '../../code/code';

const iconStyle = {
    padding: '0 1rem',
}

function ExpendedCodeList({ text, data, setCurrentCode}) {

    const [isOpen, setOpen] = React.useState(false);

    function toggleOpen() { setOpen(!isOpen); }

    const setCurrent = (url, text) => setCurrentCode(url, text);

    function handleClick(url, text) {
        setCurrent(url, text);
        setPreviousCode({url, text});
    }

    return (
        <div style={{
            minWidth: '12rem'
        }}>
            <div
                onClick={toggleOpen}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                {isOpen ?
                    <LessIcon style={iconStyle} /> :
                    <MoreIcon style={iconStyle} />
                }
                <p>{text}</p>
            </div>
            {isOpen && data.map(codeObj => {
                return (
                    <Button
                        variant="text"
                        key={codeObj.text}
                        onClick={() => handleClick(codeObj.url, codeObj.text)}
                        style={{
                            display: 'block',
                            margin: '0.5rem 0',
                            minWidth: '100%',
                            fontFamily: "Varela Round, sans-serif",
                        }}>
                        {codeObj.text}
                    </Button>
                )
            })}
        </div>
    )
}

export default ExpendedCodeList

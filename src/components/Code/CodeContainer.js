import React from 'react'
import CodeMenu from './CodeMenu';
import codes from '../../theme/codes';
import Code from './Code';
import Button from '@material-ui/core/Button';
import { getPreviousCode, } from '../../code/code';
import Radium from 'radium';
import CommonGist from '../CommonGist/CommonGist';
import createMapper from '../../theme/createMapper';



function CodeContainer() {
    const [currentCode, setCurrent] = React.useState(codes.dataTypes.mathRandom);
    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        const previousCode = getPreviousCode();
        if (!previousCode) return;
        setCurrent(previousCode)
    }, [])

    const toggleOpen = () => setOpen(!isOpen);

    const setCurrentCode = async (url, text) => {
        await setCurrent({ url, text });
        setOpen(false);
    }

    return (
        <div>

            <div style={{ textAlign: 'center' }}>
                <Button
                    variant="outlined"
                    style={{
                        marginTop: '3rem',
                        fontFamily: "Varela Round, sans-serif",
                    }}
                    onClick={() => toggleOpen()}
                >
                    תפריט
                </Button>

            </div>
            <CodeMenu
                codes={codes}
                isOpen={isOpen}
                toggleOpen={toggleOpen}
                setCurrentCode={setCurrentCode}
                currentCode={currentCode}
            />

            <Code
                src={currentCode.url}
                title={currentCode.text}
            />
        </div>
    )
}

export default CodeContainer

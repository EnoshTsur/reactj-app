import React from 'react';
import Button from '@material-ui/core/Button'

function StyledIconButton({ Icon, style, onClick, className, }) {
    return (
        <div className={className}>
            <Button onClick={onClick}>
                <Icon style={style} />
            </Button>
        </div>
    )
}

function DefalutIconButton({ Icon, onClick, className = '', miscStyles }) {
    return (
        <StyledIconButton className={className} Icon={Icon}
            style={{ color: '#0066cc', ...miscStyles, }} onClick={onClick} />
    )
}

export { StyledIconButton, DefalutIconButton, }
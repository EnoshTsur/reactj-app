import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ExpendedCodeList from './ExpendedCodeList';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

function CodeMenu({ codes, isOpen, toggleOpen, setCurrentCode, }) {

    const dataTypes = Object.values(codes.dataTypes);
    const operators = Object.values(codes.operators);
    const flow = Object.values(codes.flow);

     // The Menu
     const sideList = (
        <div>
            <Button variant="text" style={{ minWidth: '100%' }} onClick={toggleOpen}>
                <CloseIcon />
            </Button>
            <List>
                <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="דאטא טייפ"
                        data={dataTypes}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>
                <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="אופרטורים"
                        data={operators}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>
                <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="זרימה"
                        data={flow}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div style={{ overflow: 'auto' }}>
            <Drawer color="black" open={isOpen}>
                <div
                    tabIndex={0}
                    role="button"
                >
                    {sideList}

                </div>
            </Drawer>

        </div>
    );
}

export default CodeMenu

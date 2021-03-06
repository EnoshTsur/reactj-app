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
    const objects = Object.values(codes.objects)
    const bank = Object.values(codes.bank);
    const inheritance = Object.values(codes.inheritance);
    const abstract = Object.values(codes.abstract);
    const inter = Object.values(codes.interface);
    const enums = Object.values(codes.enums);

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
                        text="אינם"
                        data={enums}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>

            <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="אינטרפייס"
                        data={inter}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>

            <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="אבסטרקט"
                        data={abstract}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>

            <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="הורשה"
                        data={inheritance}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>
                
            <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="בנק"
                        data={bank}
                        setCurrentCode={setCurrentCode}
                    />
                </ListItem>
               
                <ListItem button>
                    <ExpendedCodeList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="אוביקטים"
                        data={objects}
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
                        text="דאטא טייפ"
                        data={dataTypes}
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

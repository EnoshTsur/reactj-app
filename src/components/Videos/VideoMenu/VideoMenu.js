import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ExpendedList from '../ExpendedList/ExpendedList';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


function VideoMenu({ videos, isOpen, toggleOpen, setCurrentVideo, }) {

    const devIntroduction = Object.values(videos.devIntroduction);
    const gitVideos = Object.values(videos.gitVideos);
    const javaBasicVideos = Object.values(videos.basicJava);
    const bankOverview = Object.values(videos.bank);
    const sqlVideos = Object.values(videos.sql);
    const taskVideos = Object.values(videos.reminder);
    const jdbcVideos = Object.values(videos.jdbc);
    const springVideos = Object.values(videos.spring);
    const functional = Object.values(videos.functional);
    const dp = Object.values(videos.designPatterns);
    const javascript = Object.values(videos.javascript);
    const dataStructures = Object.values(videos.dataStructures);
    const react = Object.values(videos.react);
    const reactTs = Object.values(videos.reactTs);

    // The Menu
    const sideList = (
        <div>
            <Button variant="text" style={{ minWidth: '100%' }} onClick={toggleOpen}>
                <CloseIcon />
            </Button>
            <List>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Spring"
                        data={springVideos}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="React"
                        data={react}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="React TypeScript"
                        data={reactTs}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Java Script"
                        data={javascript}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Data Structures"
                        data={dataStructures}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Functional"
                        data={functional}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Design patterns"
                        data={dp}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="JDBC"
                        data={jdbcVideos}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Reminer Task"
                        data={taskVideos}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="SQL"
                        data={sqlVideos}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>


                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Java Basic"
                        data={javaBasicVideos}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Bank Task"
                        data={bankOverview}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="Git"
                        data={gitVideos}
                        setCurrentVideo={setCurrentVideo}
                    />
                </ListItem>

                <ListItem button>
                    <ExpendedList
                        style={{
                            fontFamily: "Varela Round, sans-serif",
                        }}
                        text="מבוא לתכנות"
                        data={devIntroduction}
                        setCurrentVideo={setCurrentVideo}
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

export default VideoMenu

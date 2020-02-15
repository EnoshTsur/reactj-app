import React from 'react';
import ToolBar from '@material-ui/core/Toolbar'
import VideoIcon from '@material-ui/icons/Videocam';
import School from '@material-ui/icons/School';
import Key from '@material-ui/icons/VpnKey';
import Home from '@material-ui/icons/Home';
import Code from '@material-ui/icons/Code';
import { DefalutIconButton, } from '../IconButton/IconButton';
import { HashRouter, Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import BlackAlert from '../BlackAlert/BlackAlert';


function Navigation({ history, }) {
    const HOME = 'home';
    const VIDEOS = 'videos'
    const STUDY = 'study'
    const CODE = 'code'

    const [isMobile, setMobile] = React.useState(false);
    const [isBlackAlert, setBlackAlert,] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(HOME)


    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setMobile(mediaQuery.matches);
        mediaQuery.addListener((mq) => setMobile(mq.matches));
    }, []);

    function handleClick(who) {
        setActiveTab(who)
    }

    function NavIcon({ tab, Icon }) {
        return (
            <DefalutIconButton
                onClick={() => handleClick(tab)}
                miscStyles={{
                    color: activeTab === tab ?
                    '#003366': 
                    '#0066cc'
                }}
                Icon={Icon}
            />
        )
    }

    return (
        <ToolBar
            style={{
                backgroundColor: '#f2f2f2',
                boxShadow: '0 4px 5px lightgrey',
            }}>
            <HashRouter history={history}>
                <Link to={`/${HOME}`}>
                    <NavIcon tab={HOME} Icon={Home} />
                </Link>
            </HashRouter>

            <HashRouter history={history}>
                <Link to={`/${VIDEOS}`}>
                    <NavIcon tab={VIDEOS} Icon={VideoIcon} />
                </Link>
            </HashRouter>

            <HashRouter history={history}>
                <Link to={`/${STUDY}`}>
                    <NavIcon tab={STUDY} Icon={School} />
                </Link>
            </HashRouter>

            <HashRouter history={history}>
                <Link to={`/${CODE}`}>
                    <NavIcon tab={CODE} Icon={Code} />
                </Link>
            </HashRouter>

            {
                !isMobile && (
                    <DefalutIconButton onClick={() => setBlackAlert(true)} Icon={Key} className={classes.Key} />
                )
            }
            {
                isBlackAlert && (
                    <BlackAlert text="Maybe you should navigate to '/iddqd'" millis={4000}
                        setBlackAlert={() => setBlackAlert(false)} />
                )
            }
        </ToolBar>
    )
}

export default Navigation



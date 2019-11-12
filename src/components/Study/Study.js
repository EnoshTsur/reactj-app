import React from 'react';
import HomeWork from './HomeWork';
import WindowsCommands from './WindowsCommands';
import GitCommands from './GitCommands';
import EclipseShortcuts from './EclipseShortcuts';
import createMapper from '../../theme/createMapper';
import classes from './Study.module.css';

const previousTabStorageKey = 'previuos-study-tab';

function setPreviousTab(component) {
    localStorage.setItem(previousTabStorageKey, component)
}

function getPreviousTab() {
    return localStorage.getItem(previousTabStorageKey);
}

const studyComponentsMapper = createMapper(
    {
        homeWork: HomeWork,
        winCommands: WindowsCommands,
        gitCommands: GitCommands,
        eclipseShortcuts: EclipseShortcuts,
    },
    null
);


function selectComponent(component) {
    return studyComponentsMapper(component);
}


function Tab({ title, onClick, isActive,}) {
    return (
        <span
            style={{
                textAlign: 'center',
                minWidth: '10rem',
                padding: '1rem 0',
                backgroundColor: isActive && '#f2f2f2',

            }}
            onClick={onClick}
            className={classes.Tab}
        >
            {title}
        </span>
    )
}

function ComponentsNavigation({ onHomeWork, onWinCommands, onGitCommands, onEclipseShortcuts, currentTab,  }) {

    return (
        <div style={{
            display: 'flex',
            direction: 'rtl',
            overflow: 'auto',
            flexWrap: 'nowrap',
        }}>
            <Tab isActive={currentTab === 'homeWork'} onClick={onHomeWork} title="שיעורי בית" />
            <Tab isActive={currentTab === 'winCommands'} onClick={onWinCommands} title="פקודות ווינדווס" />
            <Tab isActive={currentTab === 'gitCommands'} onClick={onGitCommands} title="פקודות גיט" />
            <Tab isActive={currentTab === 'eclipseShortcuts'} onClick={onEclipseShortcuts} title="קיצורי דרך באקליפס" />
        </div>
    )
}

function Study() {
    const [currentTab, setCurrentTab] = React.useState('homeWork')

    React.useEffect(() => {
        if(!!getPreviousTab()) {
            setCurrentTab(getPreviousTab())
        }
    }, [])

    React.useEffect(() => {
        setPreviousTab(currentTab);
    }, [currentTab, setCurrentTab])

    const Component = selectComponent(currentTab);

    return (
        <div>
            <ComponentsNavigation 
                 onHomeWork={() => setCurrentTab('homeWork')}
                 onWinCommands={() => setCurrentTab('winCommands')}
                 onGitCommands={() => setCurrentTab('gitCommands')}
                 onEclipseShortcuts={() => setCurrentTab('eclipseShortcuts')}
                 currentTab={currentTab}
            />
            <Component/>
        </div>
    )
}

export default Study

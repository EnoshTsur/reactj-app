import React from 'react'
import classes from './UserForm.module.css';
import Button from '@material-ui/core/Button';
import { setUserStorage, create,} from '../../dataSources/userService';
import User from '../../entity/User';

import { setVideoStatistics } from '../../video/video';

function UserForm({ closeDialog, }) {

    function submit() {
        const user = new User(name);
        try {
            create(user).then(id => {
                user['_id'] = id;
                setUserStorage(user);
                setVideoStatistics();
            });
        } catch (e) {
            console.error(e)
        }
        closeDialog();
    }

    function handleInputChange(name) {
        setName(name);
        setValid(name.length > 1);
    }

    const [name, setName] = React.useState('');
    const [isValid, setValid] = React.useState(false);

    return (
        <div className={classes.Form}>
            <h2>ברוכים הבאים</h2>
            <div className={classes.FormData}>
                <input
                    type="text"
                    placeholder="שם משתמש"
                    onChange={e => handleInputChange(e.target.value)}
                    maxlength="11"
                />
                <Button
                    onClick={submit}
                    disabled={!isValid}
                >
                    שלח
            </Button>
            </div>
        </div>
    )
}

export default UserForm

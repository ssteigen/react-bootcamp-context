import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import {Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { withStyles } from "@material-ui/core";

import styles from "./styles/FormStyles";

class Form extends Component {
    render() {
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Sign In</Typography>
                    <Select value="english">
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password"></Input>
                        </FormControl>
                        <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>Sign In</Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);
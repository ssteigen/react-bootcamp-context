import React, { useContext } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from "./contexts/LanguageContext";

import styles from "./styles/NavbarStyles";

import { appStrings } from "./constants"

function Navbar({ classes }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext);
  const { flag, search } = appStrings[language];

  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span role="img" aria-label="flag">{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);

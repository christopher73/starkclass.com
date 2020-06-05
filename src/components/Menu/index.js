import React, { useState } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/actions";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import clsx from "clsx";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChatIcon from "@material-ui/icons/QuestionAnswerOutlined";
import CursosIcon from "@material-ui/icons/ViewWeek";
import QuestionIcon from "@material-ui/icons/ContactSupport";
import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/PermIdentity";
import RegisterICon from "@material-ui/icons/AssignmentTurnedIn";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    color: "black",
    // border: 'none',
    // boxShadow: 'none',
    backgroundColor: "white",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "auto",
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  avatar: {
    margin: 7,
  },
}));

function MenuBar(props) {
  const { user, isAuthenticated } = props.auth;
  // console.log(isAuthenticated, user);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <nav className="navbar navbar-dark bg-dark navi-color text-center">
          *Síguenos en Fb como @Starkclass para más novedades{" "}
        </nav>
        <Toolbar>
          <div className={classes.title}>
            <Link onClick={handleDrawerClose} to="/">
              {" "}
              <img
                src="/assets/img/pene1.svg"
                alt="Logo"
                height="70"
                width="230"
                className="imglogo"
              />
            </Link>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}></main> */}
      {/* <div className={classes.drawerHeader} /> */}

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon className={classes.menuIcon} />
            ) : (
              <ChevronRightIcon className={classes.menuIcon} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {isAuthenticated ? (
            <div>
              <ListItem button key="Profile">
                <Link
                  onClick={handleDrawerClose}
                  to="/dashboard"
                  style={{ width: "100%" }}
                >
                  <Avatar
                    alt={user.name}
                    src={user.photo}
                    className={classes.avatar}
                  />
                  <ListItemText
                    primary={user.name}
                    className={classes.avatarName}
                    // onClick={() => {
                    //   this.props.history.push("/dashboard");
                    // }}
                  />
                </Link>
              </ListItem>
              <Divider />{" "}
              <ListItem button key="VerClases">
                <Link
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  onClick={handleDrawerClose}
                  className={classes.iconColor}
                  to="/rep"
                >
                  <ListItemIcon>
                    <img
                      alt="img"
                      src="./assets/icons/play.svg"
                      width="27"
                      height="27"
                      className="imglogowsp"
                    />
                  </ListItemIcon>
                  Ver Clases
                </Link>
              </ListItem>
              <ListItem button key="wsp">
                <a
                  onClick={handleDrawerClose}
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  href="https://wa.me/51997914757?text=%C2%A1Hola!%20%F0%9F%99%82"
                  target="blank"
                >
                  <ListItemIcon>
                    <img
                      alt="img"
                      src="./assets/icons/logowtsp.svg"
                      width="30"
                      className="imglogowsp"
                    />
                  </ListItemIcon>
                  Soporte
                </a>
              </ListItem>
            </div>
          ) : (
            <div>
              <ListItem button key="Login">
                <Link
                  className={classes.iconColor}
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  onClick={handleDrawerClose}
                  to="/login"
                >
                  <ListItemIcon>
                    <LoginIcon className={classes.iconColor} />
                  </ListItemIcon>
                  Iniciar Sesión
                </Link>
              </ListItem>
              <ListItem button key="Register">
                <Link
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  onClick={handleDrawerClose}
                  to="/register"
                >
                  <ListItemIcon>
                    <RegisterICon className={classes.iconColor} />
                  </ListItemIcon>
                  REGÍSTRATE{" "}
                </Link>
              </ListItem>
            </div>
          )}
          {isAuthenticated ? null : (
            <div>
              <ListItem button key="ciclos">
                <HashLink
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  onClick={handleDrawerClose}
                  to="/#ciclosuni"
                >
                  <ListItemIcon>
                    <CursosIcon className={classes.iconColor} />
                  </ListItemIcon>
                  Ciclos
                </HashLink>
              </ListItem>
              <ListItem button key="why-code">
                <HashLink
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  className={classes.iconColor}
                  onClick={handleDrawerClose}
                  to="/#porqueStarkClass"
                >
                  <ListItemIcon>
                    <QuestionIcon className={classes.iconColor} />
                  </ListItemIcon>
                  Acerca de
                </HashLink>
              </ListItem>
              <ListItem button key="Cart">
                <HashLink
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  onClick={handleDrawerClose}
                  to="/#contactos"
                >
                  <ListItemIcon>
                    <ChatIcon className={classes.iconColor} />
                  </ListItemIcon>
                  Contáctanos
                </HashLink>
              </ListItem>
            </div>
          )}

          {isAuthenticated ? (
            <div>
              <ListItem button key="Log Out">
                <Link
                  style={{
                    width: "100%",
                    textTransform: "uppercase",
                    fontWeight: "lighter",
                    color: "gray",
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  to="/"
                  onClick={() => {
                    handleDrawerClose();
                    props.logoutUser();
                    // console.log("User Session Closed");
                  }}
                >
                  <ListItemIcon>
                    <img
                      alt="img"
                      src="./assets/icons/salir.svg"
                      width="27"
                      height="27"
                      className="imglogowsp"
                    />
                  </ListItemIcon>
                  Cerrar sesión
                </Link>
              </ListItem>
            </div>
          ) : null}
        </List>
      </Drawer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(MenuBar);

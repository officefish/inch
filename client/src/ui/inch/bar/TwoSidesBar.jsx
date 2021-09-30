import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display:'flex',
      justifyContent:'space-between'
    }
}))

const TwoSidesBar = props => {
  
  const classes = useStyles();
  const { 
    leftToolbar,
    rightToolbar } = props

  return <AppBar
      position="static"
      >
        <div className={classes.container}>
          {leftToolbar}
          {rightToolbar}  
        </div>
    </AppBar>
  
}
export default TwoSidesBar

TwoSidesBar.propTypes = {
  leftToolbar:PropTypes.node,
  rightToolbar:PropTypes.node
}
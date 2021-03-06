import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './BackgroundVideo.module.css';
import source from "../assets/comet3.mp4";
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


const WhiteTextField = withStyles({
    root: {
      '& .MuiInputBase-input': {
        color: '#fff', // Text color
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#fff8', // Semi-transparent underline
      },
      '& .MuiInput-underline:hover:before': {
        borderBottomColor: '#fff', // Solid underline on hover
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#fff', // Solid underline on focus
      },
      "& label.Mui-focused": {
        color: "white"
      },
      "& .MuiInputLabel-root": {
        color: "white",
        fontSize: 20,
      },
    },
  })(TextField);


class BackgroundVideo extends Component {

    constructor(props, context) {
        super(props, context);
       
    }

    render() {
        return (
            <div className={classes.Container}>
            <video autoPlay loop muted className={classes.Video}>
                <source src={source} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            
            <div className={classes.Content}>

            <WhiteTextField autoWidth={true} label="your name."
                onKeyPress= {(e) => {
                    if (e.key === 'Enter') {
                    console.log('Enter key pressed');
                    this.props.history.push("/dashboard");
                }}
            }       
                // onChange={this.handleName}
                // value={this.props.name}
            />
            </div>
        </div>

        )

    }

}

export default withRouter(BackgroundVideo);
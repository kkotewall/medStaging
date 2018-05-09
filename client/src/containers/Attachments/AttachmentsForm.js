import React, { Component } from 'react';
import axios from 'axios';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = {
  textField: {
    marginTop: 50,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#007AC1',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
  dragndrop: {
    borderStyle: 'dashed',
    padding: 35,
    marginTop: 35,
    textAlign: 'center',
  },
};

class AttachmentsForm extends Component {
  // create constructor state
  constructor() {
    super();
    this.state = {
      key: '',
      selectedFile: '',
    };
  }
  // grab file user selects to upload from button
  onChange = (e) => {
    const state = this.state;
    switch (e.target.name) {
      case 'selectedFile':
        state.selectedFile = e.target.files[0];
        break;
      default:
        state[e.target.name] = e.target.value;
    }

    this.setState(state);
  }
  // attachment form submit
  onSubmit = (e) => {
    e.preventDefault();
    const { key, selectedFile } = this.state;
    let formData = new FormData();

    formData.append('key', key);
    formData.append('selectedFile', selectedFile);

    axios.post('/', formData)
      .then((result) => {
        // access results...
      });
    }

  render() {
    // this.props pulled from MongoDB
    const { classes } = this.props;
    // this.state captured for axios -> s3
    const { description, selectedFile } = this.state;
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add attachment
            </Typography>
            <form noValidate autoComplete="off">
              // doctor drop-down menu
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="select-doctor">Select a doctor</InputLabel>
                <TextField
                  id="select-doctor-dropdown"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.attachmentDoctor}
                  onChange={this.props.handleAttachmentDoctorChange}
                />
              </FormControl>
              // calendar selector
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="lab-date">Date</InputLabel>
                <TextField
                  id="lab-date"
                  type="date"
                  defaultValue="MM-DD-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.attachentDate}
                  onChange={this.props.handleAttachmentDateChange}
                />
              </FormControl>
              // subject text field
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="lab-subject">Subject</InputLabel>
                <TextField
                  id="lab-subject"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.attachmentSubject}
                  onChange={this.props.handleAttachmentSubjectChange}
                />
              </FormControl>
              //confirm button submit to MongoDB
              <Button size="large" color="primary" variant="raised" className={classes.button} onClick={this.props.handleConfirm}>
                Confirm Information
              </Button>
            </form>
            // attachment form submit to S3
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="key"
                value={key}
                onChange={this.onChange}
              />
              <input
                type="file"
                name="selectedFile"
                onChange={this.onChange}
              />
              // submit button to S3 uploader
              <Button size="large" color="primary" variant="raised" type="submit" className={classes.button} onClick={this.props.handleFormSubmit}>
                Add attachment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AttachmentsForm);

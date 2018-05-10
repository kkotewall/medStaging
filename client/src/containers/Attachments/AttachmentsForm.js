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
// missing styling: IconButton, Tooltip, MenuItem

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

// show user selection from dropdown attachments list
class AttachmentsForm extends Component {
  handleAttachmentMenuOption = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleAttachmentChange(event);
  }

  // create constructor state
  constructor() {
    super();
    this.state = {
      key: '',
      selectedFile: '',
      value: '',
    };
  }
  // grab file user selects to upload from button
  onChange = (event) => {
    const state = this.state;
    switch (event.target.name) {
      case 'selectedFile':
        state.selectedFile = event.target.files[0];
        break;
      default:
        state[event.target.name] = event.target.value;
    }

    this.setState(state);
  }
  // attachment form submit
  onSubmit = (event) => {
    event.preventDefault();
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
    // pulled from other sources into render, inc MongoDB
    const { classes, attachments } = this.props;
    console.log(attachments);

    // this.state captured for axios -> s3
    const { key, selectedFile } = this.state;
    console.log(key);
    console.log(selectedFile);

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add attachment
            </Typography>
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
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
              // s3 file key
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="attachment-key">
                  <span>
                    Attachment key
                  </span>
                </InputLabel>
                <TextField
                  id="attachment-key"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  type="text"
                  name="key"
                  value={key}
                  // value={this.props.attachmentKey}
                  onChange={this.onChange}
                  //onChange={this.props.handleAttachmentKeyChange}
                />
              </FormControl>
              // file chosen to upload
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="attachment-file">
                  <span>
                    Attachment file
                  </span>
                </InputLabel>
                <TextField
                  id="attachment-file"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  // className={classes.textField}
                  type="file"
                  name="selectedFile"
                  onChange={this.onChange}
                />
              </FormControl>
              // onClick props for MongoDB
              <Button
                size="large"
                color="primary"
                variant="raised"
                // triggers onSubmit functions for S3 upload
                className={classes.button}
                // values sent exported for Attachments.js
                onClick={this.props.handleFormConfirm}
              >
                Confirm form.
              </Button>
              //  onChange evnts added to formData to be uploaded to S3 bucket
              <Button
                size="large"
                color="primary"
                variant="raised"
                // triggers onSubmit functions for S3 upload
                type="submit"
                className={classes.button}
                // values sent exported for Attachments.js
                onClick={this.props.handleFormSubmit}
                >
                Submit attachment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AttachmentsForm);

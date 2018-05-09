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
  constructor() {
    super();
    this.state = {
      description: '',
      selectedFile: '',
    };
  }

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

  onSubmit = (e) => {
    e.preventDefault();
    const { description, selectedFile } = this.state;
    let formData = new FormData();

    formData.append('description', description);
    formData.append('selectedFile', selectedFile);

    axios.post('/', formData)
      .then((result) => {
        // access results...
      });
  }

  render() {
    // form inputs use this.props which is pulled to MongoDB
    const { classes } = this.props;
    // s3 upload uses this.state which appends to axios call
    const { description, selectedFile } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.onChange}
        />
        <input
          type="file"
          name="selectedFile"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

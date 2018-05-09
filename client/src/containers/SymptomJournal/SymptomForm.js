// Importing React since we are using React.
import React from 'react';
// Importing material-ui components and style.
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

// Style
const styles = theme => ({
  textField: {
    marginTop: 60,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#007AC1',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
});

class SymptomTextFields extends React.Component {
  handleSymptomSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleSymptomTypeChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Add a symptom
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl className={classes.formControl} fullWidth>     
                <InputLabel htmlFor="select-symptom">
                  <span>
                    Select symptom  
                    <Tooltip  
                      title="Select a symptom from the drop-down list."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>     
                <TextField 
                  id='select-sympptom'
                  select
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField} 
                  value={this.state.value}
                  onChange={this.handleSymptomSelectChange}
                  SelectProps={{ name: 'value'}} 
                  margin="normal">
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Dizzy">Dizzy</MenuItem>
                    <MenuItem value="Shortness of breath">Shortness of breath</MenuItem>
                    <MenuItem value="Fainted">Fainted</MenuItem>
                    <MenuItem value="Swelling">Swelling</MenuItem>
                    <MenuItem value="Heart Fluttering">Heart Fluttering</MenuItem>
                    <MenuItem value="Fatigue">Fatigue</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="symptom-day">
                  <span>
                    Day symptom occurred
                    <Tooltip  
                      title="Use the date picker to enter the day when the symptom occurred."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="symptom-day"
                  type="date"
                  defaultValue="DD-MM-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.date}
                  onChange={this.props.handleSymptomDayChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="symptom-time">
                  <span>
                    Time symptom occurred (HH:MM)
                    <Tooltip  
                      title="Use the time picker to enter the time when the symptom occurred."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="symptom-time"
                  type="timedatetime-local"
                  defaultValue="10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.time}
                  onChange={this.props.handleSymptomTimeChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="additional-symptom-info">
                  <span>
                    Additional information you want to share with your doctor
                    <Tooltip 
                      title="Enter any additional notes to discuss with your doctor."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="additional-symptom-info"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  multiline="true"
                  rows={3}
                  rowsMax={4}
                  value={this.props.info}
                  onChange={this.props.handleSymptomInfoChange}
                />
              </FormControl>

              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised">
                  Add symptom
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SymptomTextFields);

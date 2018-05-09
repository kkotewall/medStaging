// Importing React since we are using React.
import React from 'react';
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
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
};

class ClinicForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add a clinic
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-name">Name</InputLabel>
                <TextField
                  id="clinic-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.clinicName}
                  onChange={this.props.handleClinicNameChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-address">Address</InputLabel>
                <TextField
                  id="clinic-address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicAddress}
                  onChange={this.props.handleClinicAddressChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-city">City</InputLabel>
                <TextField
                  id="clinic-city"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicCity}
                  onChange={this.props.handleClinicCityChange}
                />
              </FormControl>
              {/* <FormControl className={classes.formControl, classes.textField} fullWidth>
                <InputLabel htmlFor="select-state-dropdown">State</InputLabel>
                <Select
                  value=""
                  onChange={this.handleChange}
                  inputProps={{
                    state: '',
                    id: 'select-clinic-state',
                  }}
                >
                  <MenuItem value='' />
                  <MenuItem value='AL'>Alabama</MenuItem>
                  <MenuItem value='AK'>Alaska</MenuItem>
                  <MenuItem value='AZ'>Arizona</MenuItem>
                  <MenuItem value='CA'>California</MenuItem>
                  <MenuItem value='CO'>Colorado</MenuItem>
                  <MenuItem value='CT'>Connecticut</MenuItem>
                  <MenuItem value='DE'>Delaware</MenuItem>
                  <MenuItem value='FL'>Florida</MenuItem>
                  <MenuItem value='GA'>Georgia</MenuItem>
                  <MenuItem value='HI'>Hawaii</MenuItem>
                  <MenuItem value='ID'>Idaho</MenuItem>
                  <MenuItem value='IL'>Illinois</MenuItem>
                  <MenuItem value='IN'>Indiana</MenuItem>
                  <MenuItem value='IA'>Iowa</MenuItem>
                  <MenuItem value='KS'>Kansas</MenuItem>
                  <MenuItem value='KY'>Kentucy</MenuItem>
                  <MenuItem value='LA'>Louisiana</MenuItem>
                  <MenuItem value='ME'>Maine</MenuItem>
                  <MenuItem value='MD'>Maryland</MenuItem>
                  <MenuItem value='MA'>Massachusetts</MenuItem>
                  <MenuItem value='MI'>Michigan</MenuItem>
                  <MenuItem value='MN'>Minnesota</MenuItem>
                  <MenuItem value='MS'>Mississppi</MenuItem>
                  <MenuItem value='MO'>Missouri</MenuItem>
                  <MenuItem value='MT'>Montana</MenuItem>
                  <MenuItem value='NE'>Nebraska</MenuItem>
                  <MenuItem value='NV'>Nevada</MenuItem>
                  <MenuItem value='NH'>New Hampshire</MenuItem>
                  <MenuItem value='NJ'>New Jersey</MenuItem>
                  <MenuItem value='NM'>New Mexico</MenuItem>
                  <MenuItem value='NY'>New York</MenuItem>
                  <MenuItem value='NC'>North Carolina</MenuItem>
                  <MenuItem value='ND'>North Dakota</MenuItem>
                  <MenuItem value='OH'>Ohio</MenuItem>
                  <MenuItem value='OK'>Oklahoma</MenuItem>
                  <MenuItem value='OR'>Oregon</MenuItem>
                  <MenuItem value='PA'>Pennsylvania</MenuItem>
                  <MenuItem value='RI'>Rhode Island</MenuItem>
                  <MenuItem value='SC'>South Carolina</MenuItem>
                  <MenuItem value='SD'>South Dakota</MenuItem>
                  <MenuItem value='TN'>Tennessee</MenuItem>
                  <MenuItem value='TX'>Texas</MenuItem>
                  <MenuItem value='UT'>Utah</MenuItem>
                  <MenuItem value='VT'>Vermont</MenuItem>
                  <MenuItem value='VA'>Virginia</MenuItem>
                  <MenuItem value='WA'>Washington</MenuItem>
                  <MenuItem value='WV'>West Virginia</MenuItem>
                  <MenuItem value='WI'>Wisconsin</MenuItem>
                  <MenuItem value='WY'>Wyoming</MenuItem>
                </Select>
              </FormControl> */}

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-state">State</InputLabel>
                <TextField
                  id="clinic-state"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicState}
                  onChange={this.props.handleClinicStateChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-zip-code">Zip code</InputLabel>
                <TextField
                  id="clinic-zip-code"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicZip}
                  onChange={this.props.handleClinicZipChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-phone">Phone number</InputLabel>
                <TextField
                  id="clinic-phone"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicPhone}
                  onChange={this.props.handleClinicPhoneChange}
                />
              </FormControl>

              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleClinicFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add clinic
              </Button>
            </form>
          </CardContent>
        </Card>
      </div >
    );
  }
}

export default withStyles(styles)(ClinicForm);

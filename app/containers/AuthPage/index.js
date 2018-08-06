import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  withStyles,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import Wrapper from './Wrapper';

const styles = {
  card: {
    width: 350,
    paddingBottom: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  formControl: {
    marginTop: 10,
    width: '100%',
  },
};

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { email, password, showPassword } = this.state;

    return (
      <Wrapper>
        <Card className={classes.card}>
          <CardContent>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="email">Email*</InputLabel>
              <Input
                id="email"
                value={email}
                onChange={this.handleChange('email')}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="adornment-password">Password*</InputLabel>
              <Input
                id="adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
          <CardActions className={classes.button}>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </CardActions>
        </Card>
      </Wrapper>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(
  setDisplayName('LoginPage'),
  connect(
    null,
    mapDispatchToProps,
  ),
  withStyles(styles),
)(LoginPage);

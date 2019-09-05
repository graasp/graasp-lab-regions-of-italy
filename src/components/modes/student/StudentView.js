import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Map from './Map';
import { setInput } from '../../../actions';

const styles = theme => ({
  main: {
    textAlign: 'center',
    margin: theme.spacing.unit,
  },
  message: {
    padding: theme.spacing.unit,
    backgroundColor: theme.status.danger.background[500],
    color: theme.status.danger.color,
    marginBottom: theme.spacing.unit * 2,
  },
});

export const StudentView = ({ classes, input, dispatchSetInput }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} className={classes.main}>
        <Map />
      </Grid>
      <Grid item xs={12} className={classes.main}>
        <Typography>Guess the Name of the Region then Click on It</Typography>
        <Input
          onChange={({ target: { value } }) => dispatchSetInput(value)}
          placeholder="Calabria"
          value={input}
        />
      </Grid>
    </Grid>
  );
};

StudentView.propTypes = {
  classes: PropTypes.shape({
    main: PropTypes.object,
    message: PropTypes.object,
  }).isRequired,
  input: PropTypes.string,
  dispatchSetInput: PropTypes.func.isRequired,
};

StudentView.defaultProps = {
  input: '',
};

const mapStateToProps = ({ map }) => ({
  input: map.input,
});

const mapDispatchToProps = {
  dispatchSetInput: setInput,
};

const StyledComponent = withStyles(styles)(StudentView);

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);

export default withTranslation()(ConnectedComponent);

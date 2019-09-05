import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Italy } from './italy.svg';
import './Map.css';
import { setInput } from '../../../actions';

const handleClick = ({ target }, input, callback) => {
  const name = target.getAttribute('data-nome-regione');
  if (input === name) {
    target.setAttribute('fill', 'green');
  } else {
    target.setAttribute('fill', 'red');
  }
  callback('');
};

const Map = ({ input, dispatchSetInput }) => (
  <Italy onClick={e => handleClick(e, input, dispatchSetInput)} />
);

Map.propTypes = {
  input: PropTypes.string,
  dispatchSetInput: PropTypes.func.isRequired,
};

Map.defaultProps = {
  input: '',
};

const mapStateToProps = ({ map }) => ({
  input: map.input,
});

const mapDispatchToProps = {
  dispatchSetInput: setInput,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default ConnectedComponent;

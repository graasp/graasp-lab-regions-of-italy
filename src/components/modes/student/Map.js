import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Italy } from './italy.svg';
import './Map.css';
import { setInput } from '../../../actions';

const handleClick = ({ target }, input, currentRegion, callback) => {
  if (input === currentRegion) {
    target.setAttribute('fill', 'green');
  } else {
    target.setAttribute('fill', 'red');
  }
  callback('');
};

const REGIONS = [
  'Piemonte',
  'Lombardia',
  'Emilia-Romagna',
  'Toscana',
  'Sicilia',
  'Puglia',
  'Lazio',
  'Trentino-Alto Adige',
  'Calabria',
  'Campania',
  'Abruzzo',
  'Marche',
  'Basilicata',
  'Umbria',
  'Liguria',
  'Molise',
  "Valle d'Aosta",
  'Friuli-Venezia Giulia',
  'Veneto',
  'Sardegna',
];

const Map = ({ input, dispatchSetInput }) => {
  const [selected, setSelected] = useState(
    REGIONS[_.random(0, REGIONS.length - 1)]
  );
  const [intervalRef, setIntervalRef] = useState(null);

  useEffect(() => {
    const update = () => {
      if (REGIONS.length) {
        setSelected(prevSelected => {
          const oldSelected = document.querySelector(
            `[data-nome-regione="${prevSelected}"]`
          );
          const fill = oldSelected.getAttribute('fill');
          if (fill === 'white') {
            oldSelected.setAttribute('fill', 'orange');
          }
          return REGIONS[_.random(0, REGIONS.length - 1)];
        });
      }
    };
    const ref = setInterval(update, 15000);
    setIntervalRef(ref);
  }, []);

  useEffect(() => {
    const selectedRegion = document.querySelector(
      `[data-nome-regione="${selected}"]`
    );
    selectedRegion.setAttribute('fill', 'white');
    _.pull(REGIONS, selected);
    if (!REGIONS.length) {
      const fill = selectedRegion.getAttribute('fill');
      if (fill === 'white') {
        selectedRegion.setAttribute('fill', 'orange');
      }
      clearInterval(intervalRef);
    }
  });

  return (
    <Italy onClick={e => handleClick(e, input, selected, dispatchSetInput)} />
  );
};

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

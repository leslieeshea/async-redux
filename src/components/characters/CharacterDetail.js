import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  const {
    name,
    img,
    position
  } = character;

  return (
    <section>
      <h2>{name}</h2>
      <p>{position}</p>
      <img src={img} />
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;



import PropTypes from 'prop-types';


// eslint-disable-next-line no-unused-vars
export const GiftItem = ( {title, url, id} ) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

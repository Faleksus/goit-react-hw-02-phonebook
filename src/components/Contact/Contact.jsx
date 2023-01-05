import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ name, number, contactId, onDelete}) => {
    return (
        <div className={css.contactItem}>
            <li>{name}: {number}</li>
            <button 
                className={css.btn} 
                onClick={() => onDelete(contactId)}
            >Delete</button>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
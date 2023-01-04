import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <div className={css.contactItem}>
            <Contact
              key={id}
              name={name}
              number={number}
            />
            <button 
              className={css.btn} 
              onClick={() => onDelete(id)}
            >Delete</button>
          </div>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  )
}
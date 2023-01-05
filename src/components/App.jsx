import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from './Section/Section';
import css from "./ContactForm/ContactForm.module.css";

export class App extends Component {

  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already on contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));

  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {  
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase().trim();
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    )
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    const { addContact, changeFilter, deleteContact } = this;

    return (
        <div className={css.container}>
          <Section
            title="Phonebook"
          >
            <ContactForm 
              onSubmit={addContact}
            />
          </Section>

          <Filter 
            value={filter} 
            onChange={changeFilter}
          />

          <Section
            title="Contacts"
          >
            <p>Total number of contacts in the phonebook: {visibleContacts.length}</p>
            <ContactList
              contacts={visibleContacts}
              onDelete={deleteContact}
            />
          </Section>

      </div>
    );
  }
};

App.propType = {
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  visibleContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
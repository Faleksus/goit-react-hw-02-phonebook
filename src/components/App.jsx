import { nanoid } from 'nanoid';
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./ContactForm/ContactForm.module.css";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {

    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    console.log(newContact);

    this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
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
    const normolizedFilter = filter.toLowerCase().trim();
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normolizedFilter)
      )
    )
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
        <div className={css.container}>
          <section className={css.sectionPhonebook}>
              <h2 className={css.sectionHeader}>Phonebook</h2>
              <ContactForm 
                onSubmit={this.addContact}
              />
          </section>
          <Filter 
              value={this.state.filter} 
              onChange={this.changeFilter}
            />
            <section className={css.sectionContacts}>
              <h2 className={css.sectionHeader}>Contacts</h2>
              <ContactList
                contacts={visibleContacts}
                onDelete={this.deleteContact}
              />
            </section>
      </div>

    );
  }
};

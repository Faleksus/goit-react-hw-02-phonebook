import { nanoid } from 'nanoid';
import { Component } from "react";
import css from './Phonebook.module.css';

export class Phonebook extends Component {

    state = {
        contacts: [],
        name: '',
        id: nanoid()
    }

    handleChange = event => {
        const { name, value } = event.currentTarget; 
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.reset()
    }

    reset = () => {
        this.setState({ contacts: [], name: ''})
    }

    render () {
        return (
            <div className={css.container}>
                <section className={css.sectionPhonebook}>
                    <h2 className={css.sectionHeader}>Phonebook</h2>
                    <form className={css.formPhonebook} onSubmit={this.handleSubmit}>
                        <h3 className={css.sectionSubHeader}>Name</h3>
                        <input
                            id = {nanoid()}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        ></input>
                        <button
                            type="submit"
                        >Add contact</button>
                    </form>
                </section>
                <section className={css.sectionContacts}>
                    <h2 className={css.sectionHeader}>Contacts</h2>
                    <ul>
                        <li>Валерий Залужный</li>
                        <li>Степан Бандера</li>
                        <li>Иван Франко</li>
                    </ul>
                </section>
            </div>

        );
    }
}
import { Component } from "react";
import css from './Phonebook.module.css';

export class Phonebook extends Component {

    state = {
        contacts: [],
        name: ''
    }

    handleChange = event => {
        const { name, value } = event.currentTarget; 
        this.setState({
            [name]: value,
        })
    }

    render () {
        return (
            <div className={css.container}>
                <section className={css.sectionPhonebook}>
                    <h2 className={css.sectionHeader}>Phonebook</h2>
                    <form className={css.formPhonebook}>
                        <h3>Name</h3>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        ></input>
                        <button>Add contact</button>
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
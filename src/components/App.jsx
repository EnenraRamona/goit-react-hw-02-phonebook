import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { ContactsFilter } from './PhonebookFilter/Phonebookfilter';
import { SubTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const existingContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    !existingContact
      ? this.setState(PrevState => ({
          contacts: [...PrevState.contacts, newContact],
        }))
      : alert(`Contact "${newContact.name}" already exists in the phonebook.`);
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  handleDeleteContact = contactId => {
    this.setState(PrevState => {
      return {
        contacts: PrevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <Title>Phonebook</Title>
        <PhonebookForm onAdd={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <ContactsFilter
          filter={filter}
          onFilterChange={this.handleFilterChange}
        />
        <PhonebookList
          contacts={filteredContacts}
          name={name}
          number={number}
          deleteContact={this.handleDeleteContact}
        ></PhonebookList>
      </>
    );
  }
}

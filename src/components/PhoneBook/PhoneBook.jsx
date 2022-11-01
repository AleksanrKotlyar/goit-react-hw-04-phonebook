import React, { Component } from 'react';
import { Box, Title, SubTitle } from './PhoneBook.styled';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onClickBtnAddContact = data => {
    const normalizeName = data.name.toLocaleLowerCase();
    const renderContactsList = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );
    renderContactsList
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [{ ...data, id: nanoid(5) }, ...prevState.contacts],
          };
        });
  };

  handleFilterOnInputChange = inform => {
    this.setState({
      filter: inform,
    });
  };

  handleOnDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const normFilter = this.state.filter.toLocaleLowerCase();
    const renderContactsList = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFilter)
    );
    return (
      <Box
        bg="mainBg"
        p="4"
        mr="auto"
        ml="auto"
        mt="3"
        width="400px"
        max-height="100vh"
        border="normal"
        borderRadius="normal"
        as="section"
      >
        <Title>Phonebook</Title>
        <ContactForm onSubmitForm={this.onClickBtnAddContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter
          handleFilterOnInputChange={this.handleFilterOnInputChange}
          value={this.state.filter}
        />
        <ContactList
          data={renderContactsList}
          handleOnDelete={this.handleOnDelete}
        />
      </Box>
    );
  }
}

export default PhoneBook;

import React, { useState, useEffect } from 'react';
import { Box, Title, SubTitle } from './PhoneBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactsSkeleton } from 'components/ContactsSkeleton/ContactsSkeleton';
import { nanoid } from 'nanoid';

export const PhoneBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasLocalStorageData, setHasLocalStorageData] = useState(false);

  useEffect(() => {
    try {
      const isContactsInLocalStorage = localStorage.getItem('contacts');
      const isContactsInLocalStorageParsed = JSON.parse(
        isContactsInLocalStorage
      );
      if (isContactsInLocalStorageParsed.length > 0) {
        setIsLoading(true);
        setContacts(isContactsInLocalStorageParsed);
        setHasLocalStorageData(true);
      }

      setTimeout(() => setIsLoading(false), 1000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const onClickBtnAddContact = data => {
    const normalizeName = data.name.toLocaleLowerCase();
    const renderContactsList = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );
    renderContactsList
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [{ ...data, id: nanoid(5) }, ...prevState]);
  };

  const handleFilterOnInputChange = inform => {
    setFilter(inform);
  };

  const handleOnDelete = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  const normFilter = filter.toLocaleLowerCase();
  const renderContactsList = contacts.filter(contact =>
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
      borderColor="green"
      as="section"
    >
      <Title>Phonebook</Title>
      <ContactForm onSubmitForm={onClickBtnAddContact} />

      <SubTitle>Contacts</SubTitle>
      <Filter
        handleFilterOnInputChange={handleFilterOnInputChange}
        value={filter}
      />
      {isLoading && hasLocalStorageData && <ContactsSkeleton />}
      {!isLoading && (
        <ContactList
          data={renderContactsList}
          handleOnDelete={handleOnDelete}
        />
      )}
    </Box>
  );
};

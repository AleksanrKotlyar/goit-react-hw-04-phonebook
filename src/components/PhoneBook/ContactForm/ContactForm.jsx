import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Box } from '../PhoneBook.styled';
import { SubmitBtn, LabelForm, InputForm } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleOnInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Invalid subscription type');
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmitForm({ name: name, number: number });
    setName('');
    setNumber('');
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onSubmit={handleOnSubmit}
    >
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnInputChange}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleOnInputChange}
        />
      </LabelForm>
      <SubmitBtn type="submit">
        <AiOutlineUserAdd /> Add contact
      </SubmitBtn>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

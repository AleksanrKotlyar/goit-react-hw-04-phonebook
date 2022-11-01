import React, { Component } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Box } from '../PhoneBook.styled';
import { SubmitBtn, LabelForm, InputForm } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleOnInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onSubmit={this.handleOnSubmit}
      >
        <LabelForm>
          Name
          <InputForm
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleOnInputChange}
          />
        </LabelForm>
        <LabelForm>
          Number
          <InputForm
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleOnInputChange}
          />
        </LabelForm>
        <SubmitBtn type="submit">
          <AiOutlineUserAdd /> Add contact
        </SubmitBtn>
      </Box>
    );
  }
}

ContactForm.propTypes = { onSubmitForm: PropTypes.func.isRequired };

export default ContactForm;

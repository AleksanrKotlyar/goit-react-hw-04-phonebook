import { AiOutlineUserDelete } from 'react-icons/ai';
import { Box } from '../PhoneBook.styled';
import { ContactItem, ContactNumber, DeleteBtn } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ data, handleOnDelete }) => {
  return (
    <Box mr="auto" ml="auto" mt="20px" as="ul">
      {data.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: <ContactNumber>{number}</ContactNumber>{' '}
          <DeleteBtn type="button" onClick={() => handleOnDelete(id)}>
            <AiOutlineUserDelete />
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnDelete: PropTypes.func.isRequired,
};

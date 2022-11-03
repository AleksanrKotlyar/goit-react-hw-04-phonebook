import { Box } from '../PhoneBook.styled';
import { ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Item } from '../ContactItem/ContactItem';

export const ContactList = ({ data, handleOnDelete }) => {
  return (
    <Box mr="auto" ml="auto" mt="5px" pl="2" as="ul">
      {data.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Item
            name={name}
            number={number}
            handleOnDelete={() => handleOnDelete(id)}
          />
        </ContactItem>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnDelete: PropTypes.func.isRequired,
};

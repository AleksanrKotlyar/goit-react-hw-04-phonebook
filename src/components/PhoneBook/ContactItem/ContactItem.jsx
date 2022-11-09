import { ContactNumber, DeleteBtn } from './ContactItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Item = ({ name, number, handleOnDelete }) => (
  <>
    {name}: <ContactNumber>{number}</ContactNumber>
    <DeleteBtn type="button" onClick={handleOnDelete}>
      <AiOutlineUserDelete />
      Delete
    </DeleteBtn>
  </>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleOnDelete: PropTypes.func.isRequired,
};

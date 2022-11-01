import { ContactNumber, DeleteBtn } from './ContactItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';

export const Item = ({ name, number, handleOnDelete }) => (
  <>
    {name}: <ContactNumber>{number}</ContactNumber>
    <DeleteBtn type="button" onClick={handleOnDelete}>
      <AiOutlineUserDelete />
      Delete
    </DeleteBtn>
  </>
);

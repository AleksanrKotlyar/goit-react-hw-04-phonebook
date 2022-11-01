import { FilterLabelForm, FilterInputForm } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ handleFilterOnInputChange, value }) => {
  const handleOnInputChange = e => {
    handleFilterOnInputChange(e.target.value);
  };

  return (
    <>
      <FilterLabelForm>
        Find contacts by name
        <FilterInputForm
          type="text"
          name="filter"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnInputChange}
        />
      </FilterLabelForm>
    </>
  );
};

Filter.propTypes = {
  handleFilterOnInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

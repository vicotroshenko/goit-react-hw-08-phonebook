import { Label, Subtitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div>
      <Subtitle>Contacts</Subtitle>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="name"
          value={filter}
          onChange={handleFilter}
          title="find contacts by name"
          required
        />
      </Label>
    </div>
  );
};

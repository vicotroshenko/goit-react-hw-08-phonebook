import { Box, TextField, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';
import { FilterBox } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <FilterBox>
      <h2>Contacts</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 0, width: '90%' },
        }}
        noValidate
        autoComplete="off"
      >
        <Tooltip title="Find contact" placement="left-start">
          <TextField
            label="Search contact"
            variant="standard"
            value={filter}
            onChange={handleFilter}
            sx={{ borderRadius: '8px' }}
          />
        </Tooltip>
      </Box>
    </FilterBox>
  );
};

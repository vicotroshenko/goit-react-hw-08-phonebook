import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/operations';
import { getContacts } from 'redux/contacts/selectors';
import FormControl from '@mui/material/FormControl';
import { Button, Input, InputLabel } from '@mui/material';
import { StyledBoxFrom } from './ContactForm.styled';

export const ContactForm = () => {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    for (const contact of items) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    dispatch(operations.addContact({ name, number }));
  };

  return (
    <div>
      <StyledBoxFrom
        component="form"
        onSubmit={handleSubmit}
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-name">Name</InputLabel>
          <Input id="component-name" defaultValue="" name="name"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-number">Phone number</InputLabel>
          <Input id="component-number" defaultValue="" name='number'/>
        </FormControl>
        <FormControl></FormControl>
        <Button variant="contained" type='submit'>Add contact</Button>
      </StyledBoxFrom>
    </div>
  );
};

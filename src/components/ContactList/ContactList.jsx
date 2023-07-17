import { ListItem, ListItemText } from '@mui/material';
import { ListElements } from 'components/ListElements/ListElements';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { StyledList } from './ContactList.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import BasicModal from 'components/Modal/Modal';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);

  return (
    <>
      <StyledList component="nav">
        {error && (
          <ListItem disablePadding>
            <ListItemText primary="error" />
          </ListItem>
        )}
        {isLoading && (
          <ListItem disablePadding>
            <ListItemText primary="Loading..." />
          </ListItem>
        )}
        {items?.length > 0 && <ListElements />}
      </StyledList>
      <BasicModal>
        <ContactForm/>
      </BasicModal>
    </>
  );
};

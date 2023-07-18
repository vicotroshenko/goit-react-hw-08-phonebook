import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Box,
  LinearProgress
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import operations from 'redux/contacts/operations';
import { useEffect, useState } from 'react';


const style={
  width: "80%",
  margin: "0 auto",
}

export const ListElements = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [contactId, setContactId] = useState('');

  const dispatch = useDispatch();

  const { items, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    if(!isLoading && contactId.length > 0) {
      setContactId('')
    }
  }, [isLoading, contactId])
  

  const getFilteredContacts = () =>
    items.filter(({ id, name }) => {
      const nameListApproved = name ?? '';
      return nameListApproved.toLowerCase().includes(filter.toLowerCase());
    });

  const contactList = getFilteredContacts();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDelteItemClick = (event, id) => {
    dispatch(operations.deleteContact(id));
    setContactId(id)
  }

  const searchingNotResult = filter?.length > 0 && contactList?.length === 0;
  
  return (
    <>
      {contactList.map(({ id, name, number }, index) => (
        contactId !== id ?
          <ListItem disablePadding key={index}>
          <ListItemButton
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            selected={selectedIndex === id}
            onClick={event => handleListItemClick(event, id)}
            color="red"
          >
          <ListItemIcon sx={{ minWidth: 30 }}>
              <ContactPhoneIcon />
            </ListItemIcon>
            <span>{name}</span>
            <span>{number}</span>
            <Tooltip title="Delete number" placement="left">
              <IconButton
                aria-label="delete"
                onClick={event => handleDelteItemClick(event, id)}
                disabled={isLoading}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </ListItemButton>
        </ListItem> : <Box sx={style}><LinearProgress /></Box>
      ))}
      {searchingNotResult && (
        <ListItem>
          <p style={{ width: '100%', textAlign: 'center' }}>No matches found</p>
        </ListItem>
      )}
    </>
  );
};

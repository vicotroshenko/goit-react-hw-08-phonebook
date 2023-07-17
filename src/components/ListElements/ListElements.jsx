import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import operations from 'redux/operations';
import { useState } from 'react';

export const ListElements = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () =>
    items.filter(({ id, name }) => {
      const nameListApproved = name ?? '';
      return nameListApproved.toLowerCase().includes(filter.toLowerCase());
    });
  const contactList = getFilteredContacts();


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const searchingNotResult = filter?.length > 0 && contactList?.length === 0;
  return (
    <>
      {contactList.map(({ id, name, number }, index) => (
        <ListItem disablePadding key={index} >
          <ListItemButton sx={{display: "flex", justifyContent: "space-between" }} 
                    selected={selectedIndex === id}
                    onClick={(event) => handleListItemClick(event, id)}
                    color='red'
          >
            <ListItemIcon sx={{minWidth: 30}}>
              <ContactPhoneIcon />
            </ListItemIcon>
            <span>{name}</span>
            <span>{number}</span>
            <Tooltip title="Delete number" placement="left">
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(operations.deleteContact(id))}
                disabled={isLoading}
              >
              <DeleteIcon />
              </IconButton>
            </Tooltip>
           
          </ListItemButton>
        </ListItem>
      ))}
      {searchingNotResult && <ListItem>
          <p style={{width: "100%", textAlign: "center" }}>No matches found</p>
      </ListItem>}
    </>
  );
};

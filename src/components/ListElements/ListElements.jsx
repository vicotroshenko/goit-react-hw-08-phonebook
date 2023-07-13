import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Item, ButtonDelete, Phone } from './ListElements.styled';

export const ListElements = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () =>
    items.filter(({ id, name, phone }) => {
      const nameListApproved = name ?? '';
      return nameListApproved.toLowerCase().includes(filter.toLowerCase());
    });
  const contactList = getFilteredContacts();

  return (
    <>
      {contactList.map(({ id, name, phone }, index) => (
        <Item key={index}>
          {name}
          <Phone>{phone}</Phone>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            disabled={isLoading}
          >
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </>
  );
};

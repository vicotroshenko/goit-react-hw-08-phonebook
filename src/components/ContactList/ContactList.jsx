import { List } from './ContactList.styled';
import { ListElements } from 'components/ListElements/ListElements';
import { ThreeCircles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const loadingStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  };
  return (
    <List>
      {isLoading && (
        <ThreeCircles
          height="150"
          width="150"
          color="black"
          wrapperStyle={loadingStyles}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      {error && <p>{error}</p>}
      {items?.length > 0 && <ListElements />}
    </List>
  );
};

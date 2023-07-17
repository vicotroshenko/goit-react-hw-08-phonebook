import { useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import operetions from 'redux/operations';
import { Header } from 'components/Header/Header';
import { LinearBack } from 'components/LinearBack/LinearBack';



const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operetions.fetchContacts());
  }, [dispatch]);



  return (<LinearBack>
    <div>
      <Header/>
      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
    </LinearBack>
  );
};

export default Contacts;

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from "react-toastify";

import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import Loader from './Loader/Loader';
import { fetchContacts } from '../redux/contactsOps'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <h1>Phonebook <Loader /></h1>
      <ContactForm />
      <SearchBox/>
      <ContactList />
      <ToastContainer position='top-center' toastOptions={{ duration: 1750, style: { color: "red" } }}/>
    </div>
  )
}

export default App

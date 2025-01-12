import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'

import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

function ContactList() {
  const contactList = useSelector(selectFilteredContacts)

  return (
    <div className={css.contacts}>
      {contactList.map(itm => { 
        return (<Contact key={itm.id} {...itm} />)
      })}
    </div>)
 }

export default ContactList

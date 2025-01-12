import { useSelector } from 'react-redux'
import css from './Loader.module.css'
import { Hourglass } from "react-loader-spinner"
import { selectContactsLoading } from '../../redux/contactsSlice'

function Loader() {
  const load = useSelector(selectContactsLoading)

  return (
    <div className={css.loader}>
      {load && <Hourglass glassColor="blue" color="darkgray" height="32px" />}
    </div>
  )
}

export default Loader

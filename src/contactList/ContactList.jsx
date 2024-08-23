import Contact from "../contact/Contact";
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete}) => {
    return (
        <ul className={css.ul}>
            {contacts.map(({id, name, number}) => (
                <Contact key={id} name={name} number={number} onDelete={() => onDelete(id)} />
            ))}
        </ul>
    );
};
export default ContactList;
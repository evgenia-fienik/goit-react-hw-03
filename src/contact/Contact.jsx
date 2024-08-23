import css from './Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
    return (
        <div className={css.container}>
        <div className={css.item}>
            <p className={css.element}><FaUser /> {name}</p>
            <p className={css.element}><FaPhoneAlt/> {number}</p>
        </div>
            <button className={css.btn} onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Contact;
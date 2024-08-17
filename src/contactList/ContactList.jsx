import Contact from "../contact/Contact";

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <Contact key={contact.id} name={contact.name} number={contact.number} />
            ))}
        </ul>
    );
};
export default ContactList;
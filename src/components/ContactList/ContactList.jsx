import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const name = useSelector((state) => state.filters.name);

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <ul className={s.list}>
        {filtredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

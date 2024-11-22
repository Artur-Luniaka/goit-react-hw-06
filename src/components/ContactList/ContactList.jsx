import { useSelector } from "react-redux";
import "../../assets/contacts.json";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

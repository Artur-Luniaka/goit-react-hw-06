import "./App.css";
import "modern-normalize/modern-normalize.css";
import { useEffect, useState } from "react";
import contacts from "./assets/contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (!savedContacts) {
      return contacts;
    }
    return JSON.parse(savedContacts);
  });
  const [searchContact, setSearchContact] = useState("");
  const handleSearchContact = (e) => {
    setSearchContact(e.target.value);
  };
  const handleContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );
  const handleSubmit = (values, actions) => {
    const contactWithId = { ...values, id: nanoid(5) };
    setContact([...contact, contactWithId]);
    actions.resetForm();
  };
  const deleteContact = (id) => {
    setContact(contact.filter((contact) => contact.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox onChange={handleSearchContact} />
      <ContactList contacts={handleContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;

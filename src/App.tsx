import { useState, useEffect } from "react";

type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  endereco: string;
};

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/contacts").then((data) =>
      data.json().then((response) => setContacts(response))
    );
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <h1>{contact.email}</h1>
      ))}
    </div>
  );
}

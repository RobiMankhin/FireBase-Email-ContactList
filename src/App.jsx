import { useEffect, useState } from "react";
import SearchAdd from "./components/SearchAdd";
import Navbar from "./components/navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/contactCard";
import CustomHook from "./Hooks/CustomHook";
import AddUpdate from "./components/AddUpdate";
import NoContact from "./components/NoContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const { isopen, isClose, onOpen } = CustomHook();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "ourcontacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setContacts(contactLists);
          console.log(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filtering = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "ourcontacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px]  mx-auto relative z-50">
        <Navbar />
        <SearchAdd onOpen={onOpen} filtering={filtering} />

        <AddUpdate isopen={isopen} isClose={isClose} />

        <div>
          {contacts.length <= 0 ? (
            <NoContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Form from "./Form/Form";
import { Container } from "./Container/Container";
import { ContactsList } from "./Contacts/Contacts";
import FilterInput from "./FilterInput/FilterInput";


const KEY = "CONTATCS"

// const App = () => {
//   const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem(KEY)) || []})
//   const [filter, setFilter] = useState('')


//    useEffect(() => {
//      window.localStorage.setItem(KEY, JSON.stringify(contacts) )
//   }, [contacts])


//     const addContact = (name, number) => {
//     if (contacts.find(el => el.name === name)) {
//       return alert(`${name} is already in contact`)
//     }
//     if (contacts.find(el => el.number === number)) {
//       return alert(`${number} is already in contact`)
//     }

//     setContacts([...contacts, { id: nanoid(5), name: name, number: number }])
//   }

//      const onFilterHandle = (e) => {
//        const { value } = e.currentTarget;
//        setFilter(value)
//   }

//     const filterContacts= () => {
//     return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
//   }


//     const deleteContact = (id) => {
//     setContacts(contacts.filter(el => el.id !==id))

//   }

//     const filteredContacts = filterContacts();


//       return ( 
//       <Container>
//         <h2>Phonebook</h2>
//         <Form addContact={addContact}/>

//         <FilterInput onChange={e => {onFilterHandle(e)}}></FilterInput>

//         <Contacts contacts={filteredContacts} deleteContacts={deleteContact}></Contacts>

//         </Container>
//     )
// }
const App = () => {
  // const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem(KEY)) || []})
  // const [filter, setFilter] = useState('')


  //  useEffect(() => {
  //    window.localStorage.setItem(KEY, JSON.stringify(contacts) )
  // }, [contacts])


  //   const addContact = (name, number) => {
  //   if (contacts.find(el => el.name === name)) {
  //     return alert(`${name} is already in contact`)
  //   }
  //   if (contacts.find(el => el.number === number)) {
  //     return alert(`${number} is already in contact`)
  //   }

  //   setContacts([...contacts, { id: nanoid(5), name: name, number: number }])
  // }

  //    const onFilterHandle = (e) => {
  //      const { value } = e.currentTarget;
  //      setFilter(value)
  // }

  //   const filterContacts= () => {
  //   return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
  // }


  //   const deleteContact = (id) => {
  //   setContacts(contacts.filter(el => el.id !==id))

  // }

  //   const filteredContacts = filterContacts();


      return ( 
      <Container>
        <h2>Phonebook</h2>
        <Form />

        <FilterInput />

        <ContactsList />

        </Container>
    )
}

export default App
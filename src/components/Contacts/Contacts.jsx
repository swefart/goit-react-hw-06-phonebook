import { Item, List, Text, DeleteBtn } from "./Contacts.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "Store/contactsSlice";

import PropTypes from 'prop-types';


export const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts)
    const filter = useSelector(state => state.filter)

    return (
        (<List>
            <h2>Contacts</h2>
            {contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number }) => {
                return (
                    <Item key={id} name={name} number={number}>
                        <Text>{`${name}: ${number}` }</Text> <DeleteBtn onClick={()=> {dispatch(deleteContact(name))}}>Delete</DeleteBtn>
                    </Item>
                    )
                })}
            </List>)
        
    )
}


ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string)
    )
};

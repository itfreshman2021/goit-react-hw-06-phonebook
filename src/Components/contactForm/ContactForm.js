import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addItemsInfo } from '../../redux/actions/itemsActions';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, SetName] = useState('');
  const [number, SetNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        SetName(value);
        break;
      case 'number':
        SetNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = dataContact => {
    const DoubleContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === dataContact.name.toLocaleLowerCase(),
    );

    if (DoubleContact !== undefined) {
      alert(`${DoubleContact.name} is already in contacts.`);
      return;
    }
    const contactNew = {
      id: uuidv4(),
      name: dataContact.name,
      number: dataContact.number,
    };

    dispatch(addItemsInfo(contactNew));
  };

  const HandleSubmit = event => {
    event.preventDefault();
    addContact({ name, number });

    SetName('');
    SetNumber('');
  };

  return (
    <form onSubmit={HandleSubmit} className={s.ContactForm}>
      <label className={s.ContactFormLabel}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleChange}
          required
          className={s.ContactFormInput}
        />
      </label>
      <label className={s.ContactFormLabel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleChange}
          required
          className={s.ContactFormInput}
        />
      </label>

      <button type="submit" className={s.ContactFormButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

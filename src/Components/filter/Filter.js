import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { addFilterInfo } from '../../redux/actions/filterActions';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={s.FilterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={filter}
          onChange={event => dispatch(addFilterInfo(event.target.value))}
          required
          className={s.FilterInput}
        />
      </label>
    </>
  );
};

export default Filter;

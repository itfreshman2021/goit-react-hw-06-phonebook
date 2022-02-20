import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemsInfo } from '../../redux/actions/itemsActions';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.ContactListItemli}>
      <p className={s.ContactListItemP}>
        {name}:<span className={s.ContactListItemSpan}>{number}</span>
      </p>
      <button
        type="button"
        className={s.ContactListItemButton}
        onClick={() => dispatch(deleteItemsInfo(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;

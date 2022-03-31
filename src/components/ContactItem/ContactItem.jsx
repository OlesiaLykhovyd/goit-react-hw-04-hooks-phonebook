import css from './ContactItem.module.css';

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <>
      <span>
        - {name}: {number}
      </span>
      <button
        className={css.contactListItemButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
}

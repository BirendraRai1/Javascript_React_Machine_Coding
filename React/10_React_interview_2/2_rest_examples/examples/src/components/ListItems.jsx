const ListItems = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <li key={`item-${index + 1}`}>
            {item.name}
            <button onClick={() => onDelete(item.id)}>delete</button>
          </li>
        );
      })}
    </>
  );
};

export default ListItems;

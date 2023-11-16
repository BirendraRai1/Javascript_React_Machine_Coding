import { useCallback, useState } from "react";
import ListItems from "./ListItems";
const UseCallbackConcept = () => {
  //need a list of data
  //cache the whole data ->useMemo
  //for deleting the list item,I need a method to
  //perform the deleting  an item ->has to be cached via callback() hook
  const [items, setItems] = useState([
    { id: "1", name: "item 1" },
    { id: "2", name: "item 2" },
    { id: "3", name: "item 3" },
  ]);

  const deletingItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id != itemId));
  };

  const handleDelete = (itemId) => {
    console.log("came only for the first time");
    deletingItem(itemId);
  };

  // const handleDelete = useCallback(
  //   (itemId) => {
  //     console.log("came only for the first time");
  //     deletingItem(itemId);
  //   },
  //   [setItems]
  // ); //you have to pass dependency array also
  /*whenever you call onDelete state changes and whenever state changes except line 8 to 12 everything rerenders
  again it means your function will be given memory again.We are having the listItems that has the function onDelete that is calling state changes
  when called .when a function component is called or a function that is called if we have a variable or function
  inside that then that will be given a new memory always
  we  have a function named useCallback with which we can prevent allocating for a particular function redeclaration.
  If you want to prevent redeclaration just use useCallback 
  
  whichever function you want to prevent it from redeclaration wrap it around useCallback
   **/
  return (
    <>
      <h2>Your List Items</h2>
      <ListItems items={items} onDelete={handleDelete} />
    </>
  );
};
export default UseCallbackConcept;

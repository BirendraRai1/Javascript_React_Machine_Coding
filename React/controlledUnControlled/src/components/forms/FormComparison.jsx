import React from "react";

function FormComparison() {
  return (
    <>
      <form>
        <label>First name:</label>
        <br />
        <input type="text" value="John" />
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" defaultValue="Doe" />
      </form>
    </>
  );
}
/*The form in reactjs is different from html is first that it should 
have a closing brace for br tag ,input tag .Second is that this form was editable 
in html but in react js it gives below warning.It is not editable if we try to edit it
***/

/*You provided a `value` prop to a form field without an `onChange` handler. 
The value attribute in the input is treated as a prop and we know that props are readonly .we can see
send here and there ,see but we cannot change the value .
Instead of value if we changed to defaultValue then we can edit
but how we can manage,display and store content inside defaultValue we cannot do .AtLast we need the help of state.
So it controlled by react thats why it is known as controlled component
This will render a read-only field. If the field should be mutable use `defaultValue`. 
Otherwise, set either `onChange` or `readOnly`
*******/

export default FormComparison;

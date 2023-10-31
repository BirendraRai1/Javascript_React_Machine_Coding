## How react Renders

## JSX -> JS (transpilation)

- The first step is conversion of JSX into JS.This is known as transpilation that can be understood by browser.
  For transpilation we use babel for it.

* Babel -> JSX -> JS
* React : does the conversion of your UI into a json object -> VDOM

* Architectures : Fiber architecture

1. Intial Render:

- **VDOM** : virtual DOM : it is a in memory representation of orginal DOM of the browser

2. Update few changes : update the state

- Lets assume we have a simple counter component .React will create another VDOM and then it will compare with the previous virtual DOM.
- This process of comparing our old VDOM with new VDOM is Known as `Reconcilation`
- React uses an algorithm known `Diffing alogorithm` to compare your Old VDOM with new VDOM.This algorithm is the
  soul of react
- Time complexity of our Diffing Algorithm -> O(n)

3. Updating the Real DOM:-It will be using those minimum
   set of changes and with those changes it is going to
   update your real dom

- It will be using those minimum set of changes and with those changes it is going to
  update your real dom

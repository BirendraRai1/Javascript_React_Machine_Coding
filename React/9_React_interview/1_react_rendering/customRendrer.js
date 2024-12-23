/***
 * 1. type :
 *      string : For html element: use document.create element
 *      function : custom component: call that function and if we have props then pass that also
 * 2. props:
 *  objects
 *        * objects can have values of strings  : normal attributes ex:  class , id -> setAttribute
 *        * your props can have children property also
 *        *  children can have values as arrays:
 *              * arrays
 *                  can have value as string
 *                  can have value as function : Custom element
 *                  can have a object : normal element
 * */

const obj = {
  type: "div",
  props: {
    class: "container",
    children: [
      {
        type: "h1",
        props: {
          children: " this is ",
        },
      },
      {
        type: "p",
        props: {
          class: "paragraph",
          children: [
            " I am ",
            {
              type: (props) => ({
                type: "button",
                props: { children: props.counter + "Clicks" },
              }),
              props: { counter: 1 },
            },
            " from",
          ],
        },
      },
    ],
  },
};

/***
 * <div   class="container">
 * <h1>this is </h1>
 * <p class ="paragraph">I am <button>1 clicks</button> from</p>
 * </div >
 * */

// 

function render(vDOM) {
  const { type, props } = vDOM;

  // Handle functional components
  if (typeof type === "function") {
    const dynamicVDOM = type(props); // Evaluate the functional component
    return render(dynamicVDOM); // Recursively render the resulting virtual DOM
  }

  // Handle text nodes
  if (isTextNode(vDOM)) {
    return document.createTextNode(vDOM);
  }

  // Create the DOM element
  const root = document.createElement(type);

  // Destructure props
  const { children, ...restProps } = props || {};

  // Set attributes
  for (let attr in restProps) {
    root.setAttribute(attr, restProps[attr]);
  }

  // Render children recursively
  if (Array.isArray(children)) {
    children.forEach((child) => {
      const element = render(child);
      root.appendChild(element);
    });
  } else if (children) {
    root.appendChild(render(children));
  }

  return root;
}

function isTextNode(vDOM) {
  //return typeof vDOM === "string" || typeof vDOM === "number";
  return typeof vDOM !='object'
}

document.addEventListener("DOMContentLoaded", function () {
  const rootElem = document.querySelector("#root");
  const wholeApp = render(obj);
  console.log("whole app", wholeApp);
  rootElem.appendChild(wholeApp);
});

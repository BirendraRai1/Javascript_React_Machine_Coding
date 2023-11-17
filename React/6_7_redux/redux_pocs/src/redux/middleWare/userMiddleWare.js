// useEffect(function () {
//     (async function () {
//         try {
//             setLoading(true);
//             const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
//             const user = await resp.json();
//             console.log("user", user);
//             setLoading(false);
//             setUser(user);
//         } catch (err) {
//             setError(true);
//             setLoading(false);
//         }
//     })()
// }, []);

// dispatch is provided to this middleware
import userslice from "../slices/UserSlice";
const actions = userslice.actions;
//It is a hook in a function component
export const fetchUserMiddleWare = (param) => {
  return async (dispatch) => {
    try {
      dispatch(actions.userLoading());
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${param}`
      );
      const user = await resp.json();
      console.log("user is ", user);
      dispatch(actions.userData(user));
    } catch (err) {
      dispatch(actions.userError());
    }
  };
};

// export const fetchUserMiddleWare =
//   //here we are using dispatch as an argument of async because dispatch = useDispatch() can only be called inside a react component
//   async (dispatch) => {
//     // input state
//     try {
//       dispatch(action.userLoading());
//       const resp = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
//       const user = await resp.json();
//       console.log("user", user);
//       dispatch(action.userData(user));
//     } catch (err) {
//       dispatch(action.userError());
//     }
//   };

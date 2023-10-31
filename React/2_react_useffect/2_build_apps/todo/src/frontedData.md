## Application :

## How UI is rendered in case of real life apps?

- 1st thing is We have to do an inital render :-loader / placeholder
- And Parallely make the request
- And final thing is Replace the inital placeholder with actual data

## Since we dont have any user interaction in the above case React must provide feature to just call function at different stages of an application

flag =false
data =[];

1. render the UI and then loading is printed when the flag is false
2. make a request
3. when we get the data .update the data state from empty array to the data we get and then rerender it

we need a function after the first rendering 

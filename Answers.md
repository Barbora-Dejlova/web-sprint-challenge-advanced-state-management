1. What problem does the context API help solve?

Prop Drilling. This way if we want to pass API data to different components we dont have to use PROPS.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action - sends payloads of information that send data from an application to the store.
Reducers - specify how the application's state changes in response to actions sent to the store.
Store - is an object that holds the application's state tree.
The store holds the source of all the data which gives you controllability of the components.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. Redux uses the store to hold application state. Meaning any component in the app can access it as long as they connect into it. The component state can only be updated within that specific component and passed down to its children through props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows you to write actions creators that return a function instead of an action. It can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

CONTEXT API ! Less work, more maneagable than Redux.
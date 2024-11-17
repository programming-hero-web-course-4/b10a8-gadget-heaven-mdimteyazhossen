# Gadget Heaven

# **Live Website**: [https://gadget-heaven-177.surge.sh/](https://gadget-heaven-177.surge.sh/)


## Requirements Document
For the complete project requirements and specifications, refer to the following link:
[https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

---



## React Fundamental Concepts Used in the Project

### 1. **JSX (JavaScript XML)**
   - JSX is a syntax extension that allows you to write HTML-like code in JavaScript. It makes it easier to write and understand the structure of React components.
   - Example:
     ```jsx
     const element = <h1>Hello, world!</h1>;
     ```

### 2. **Components**
   - React applications are built using **components**, which are the building blocks of the UI. Components can be either **functional** or **class-based**.
   - In this project, **functional components** are used along with **React hooks** for state and lifecycle management.
   - Example:
     ```jsx
     const MyComponent = () => <h1>Hello from MyComponent!</h1>;
     ```

### 3. **Props (Properties)**
   - Props are used to pass data from a parent component to a child component. Props are **read-only** and allow components to be dynamic.
   - Example:
     ```jsx
     const Greeting = (props) => <h1>Hello, {props.name}!</h1>;
     ```

### 4. **State**
   - **State** is used to store dynamic data within a component that can change over time. React components re-render when the state is updated.
   - In this project, the `useState` hook is used to manage state in functional components.
   - Example:
     ```jsx
     const [count, setCount] = useState(0);
     ```

### 5. **React Hooks**
   - React **hooks** allow you to use state and other React features in functional components.
     - `useState`: Manages state within functional components.
     - `useEffect`: Performs side effects in functional components (e.g., fetching data, subscribing to events).
   - Example:
     ```jsx
     useEffect(() => {
       console.log("Component mounted!");
     }, []);
     ```

### 6. **Event Handling**
   - React provides **event handling** mechanisms for capturing user interactions like clicks, form submissions, etc.
   - Example:
     ```jsx
     const handleClick = () => alert("Button clicked!");
     return <button onClick={handleClick}>Click Me</button>;
     ```

### 7. **Conditional Rendering**
   - Conditional rendering in React allows you to display different content based on certain conditions (e.g., based on state or props).
   - Example:
     ```jsx
     const isLoggedIn = true;
     return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
     ```

### 8. **React Router (Routing)**
   - **React Router** is used for handling **client-side routing** in single-page applications (SPAs). It allows users to navigate between different views without reloading the page.
   - Example:
     ```jsx
     import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

     <Router>
       <Switch>
         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
       </Switch>
     </Router>
     ```

### 9. **Context API**
   - The **Context API** is used for managing global state in React applications. It avoids prop drilling (passing props down multiple levels) by allowing any component to access shared data.
   - Example:
     ```jsx
     const ThemeContext = React.createContext();

     const App = () => {
       const [theme, setTheme] = useState('light');
       return (
         <ThemeContext.Provider value={{ theme, setTheme }}>
           <ChildComponent />
         </ThemeContext.Provider>
       );
     };
     ```

### 10. **useEffect Hook (Side Effects)**
   - The **`useEffect`** hook is used to perform side effects in functional components, such as fetching data or subscribing to events. It is similar to lifecycle methods in class components like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
   - Example:
     ```jsx
     useEffect(() => {
       fetchData();
     }, []); // [] ensures it runs once when the component mounts
     ```
## Data Handling and Management

In this project, we use **`localStorage`** to handle and manage user-related data, ensuring that certain states persist across browser sessions. **`localStorage`** is a built-in JavaScript API that allows storing data in the user's browser, so the data remains even if the page is refreshed or the browser is closed and reopened.

### What We Use `localStorage` For:

1. **Persisting User Preferences:**
   - Theme preferences (light or dark mode) are stored in **`localStorage`**, so the app remembers the user's theme selection even after page reloads or browser restarts.
   
   ```javascript
   const saveTheme = (theme) => {
     localStorage.setItem('theme', theme);
   };

   const getTheme = () => {
     return localStorage.getItem('theme') || 'light'; // Default to 'light' if no theme is stored
   };

## 5 Features of Your Website/Project

### 1. There are has specific categories to buy products.
### 2. You will sort products by price in decending .
### 3. You will add your favourte products in WishList.
### 4. Purchase all products in one click.
### 5. You will see our customer reviews. 


### DevStack

### Description

DevStack is a modern developer resource platform that helps developers discover and 
explore useful tools, technologies, and resources in one place. It provides a clean,
responsive, and user-friendly interface for finding essential developer resources quickly and easily.

### Technologies Used

* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **JavaScript**
* **HTML5 & CSS3**

### 3 Key Features

1. **Developer Resource Discovery** — Browse and explore useful development tools and resources from a single platform.
2. **Clean & Responsive UI** — A modern interface that works smoothly across desktop, tablet, and mobile devices.
3. **Easy Navigation** — Organized sections and intuitive navigation make it easy to find the required resources quickly.


### React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand, especially when creating the UI.

**2. What is the difference between props and state?**
Props are used to pass data from a parent component to a child component. State is used to store data inside a component that can change over time.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` is used to store and update data in a React component. In this project, I used it to manage things like the selected items in my stack and update the UI when the data changes.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` is used to run some code when a component loads or when something changes. I used it to load the JSON data when the project started.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
A unique `key` helps React identify each item in a list. It helps React understand which item was added, removed, or changed and update the UI correctly.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing something based on a condition. In my project, I used it to show an empty stack message when there are no items in the stack.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent can pass data to a child using props. If the child needs to send something back, the parent can pass a function as a prop, and the child can call that function with the data.

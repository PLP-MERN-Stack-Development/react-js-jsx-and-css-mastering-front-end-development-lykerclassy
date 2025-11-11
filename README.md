# 🎨 Week 3: React.js, JSX, and Tailwind CSS

This project is a responsive React application built for the Week 3 assignment. It demonstrates a mastery of modern front-end development, including component architecture, state management with React Hooks, API integration, and responsive styling with Tailwind CSS.

## 🚀 Live Demo

https://react-js-jsx-and-css-mastering-front-end-development-kz3b6hwpc.vercel.app/

---

## ✨ Features

* **Component-Based Architecture:** Built with reusable, self-contained components like `Button`, `Card`, `Navbar`, and `Layout`.
* **Responsive Design:** A mobile-first design that scales perfectly to tablets and desktops using Tailwind CSS.
* **Dark Mode:** Full light/dark mode support, built with React Context and `useContext`, and persisted with `localStorage`.
* **Routing:** Uses `react-router-dom` for seamless client-side navigation between pages.

### Task Manager
* **Add Tasks:** Users can add new tasks to their list.
* **Complete Tasks:** Mark tasks as complete with a checkbox.
* **Delete Tasks:** Remove tasks from the list.
* **Filter Tasks:** View "All," "Active," or "Completed" tasks.
* **Persistent State:** Uses a `useLocalStorage` custom hook to save all tasks, so they are never lost on refresh.


[Image of the Task Manager component UI]


### API Data Page
* **Fetch Data:** Fetches a list of posts from the public `jsonplaceholder` API.
* **Loading & Error States:** Displays a "Loading..." message and handles API errors gracefully.
* **Live Search:** A search bar filters all posts by title in real-time.
* **Pagination:** A simple "Previous" and "Next" pagination system to browse the 100 posts.

---

## 🛠️ How to Run This Project Locally

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd react-js-jsx-and-css-mastering-front-end-development-lykerclassy
    ```
3.  **Navigate to the frontend application:**
    ```bash
    cd frontend
    ```
4.  **Install dependencies:**
    ```bash
    npm install
    ```
5.  **Start the development server:**
    ```bash
    npm run dev
    ```
6.  Open [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal) in your browser.

---


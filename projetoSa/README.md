# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


To navigate in a React application, you typically use a library like React Router. Here's a quick guide to help you get started:

1. Install React Router

First, install the React Router library in your project:

Copiar o código
npm install react-router-dom

2. Set Up Routes

Wrap your app in a BrowserRouter and define your routes using the Routes and Route components:

Copiar o código
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

3. Navigate Between Pages

Use the Link component for navigation:

Copiar o código
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;


Or programmatically navigate using the useNavigate hook:

Copiar o código
import React from "react";
import { useNavigate } from "react-router-dom";

function GoToAbout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return <button onClick={handleClick}>Go to About</button>;
}

export default GoToAbout;

4. Handle Dynamic Routes

For dynamic paths, use route parameters:

Copiar o código
<Route path="/user/:id" element={<User />} />


Access the parameter using the useParams hook:

Copiar o código
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

export default User;


This setup should give you a solid foundation for navigation in React. Let me know if you'd like further clarification or examples! 😊
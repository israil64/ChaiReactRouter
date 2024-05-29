import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useFetcher,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";
import NotFound from "./components/NotFound/NotFound";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  function darkMode() {
    setThemeMode("dark");
  }

  function lightMode() {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("ligh", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route path="github" element={<Github />} loader={githubInfoLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

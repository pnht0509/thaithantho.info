import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import { ProjectList } from "./pages/ProjectList";
import { Navbar } from "./component/NavBar";

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route />
      </Routes>
    </>
  );
}

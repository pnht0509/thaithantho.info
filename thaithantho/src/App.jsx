import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import { ProjectList } from "./pages/ProjectList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:id" element={<Project />} />

      <Route />
    </Routes>
  );
}

export default App;

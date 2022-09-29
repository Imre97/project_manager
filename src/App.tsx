import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CreateProject from "./Pages/CreateProject";
import { FormData } from './modal/modal'
import Project from './Pages/Project';


function App() {
  const [formDatas, setFormDatas] = useState<FormData[]>([])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home formDatas={formDatas} />} />
        <Route path="new-task" element={<CreateProject formDatas={formDatas} setFormDatas={setFormDatas} />} />
        <Route path="project/:id" element={<Project formDatas={formDatas}/>} />
      </Routes>
    </div>
  );
}

export default App;

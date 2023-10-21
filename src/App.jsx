import { useState } from "react";
import "./App.css";
import InputSection from "./components/InputSection";
import Intro from "./components/Intro";
import WaterForm from "./components/WaterForm";

function App() {
  const [formData, setFormData] = useState({
    showers_per_week: "",
    shower_minutes: "",
    shower_head_type: "",
    flushes_per_day: "",
    toilet_type: "",
    loads_per_week: "",
    laundry_machine_type: "",
  });
  return (
    <div className="flex flex-col">
      <Intro></Intro>
      <InputSection>
        <WaterForm formData={formData} setFormData={setFormData}></WaterForm>
      </InputSection>
    </div>
  );
}

export default App;

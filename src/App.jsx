import { useState } from 'react'
import './App.css'
import PersonalForm from './components/PersonalForm';
import Display from './components/Display'
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';

function App() {
  const [data, setData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    education: {
      school: '',
      fieldOfStudy: '',
      finishDate: ''
    },
    experience: {
      position: '',
      company: '',
      responsibilities: '',
      startDate: '',
      endDate: ''
    }
  });

  return (
    <div>
      <PersonalForm data={data} setData={setData}></PersonalForm>
      <EducationForm data={data} setData={setData}></EducationForm>
      <ExperienceForm data={data} setData={setData}></ExperienceForm>
      <Display personalInfo={data.personalInfo} education={data.education} experience={data.experience} />
    </div>
  )
}

export default App

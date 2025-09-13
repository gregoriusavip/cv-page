import { useState } from 'react'
import './App.css'
import PersonalForm from './components/PersonalForm';
import Display from './components/Display'
import EducationForm from './components/EducationForm';

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
    experience: []
  });

  return (
    <div>
      <PersonalForm data={data} setData={setData}></PersonalForm>
      <EducationForm data={data} setData={setData}></EducationForm>
      <Display personalInfo={data.personalInfo} education={data.education} />
    </div>
  )
}

export default App

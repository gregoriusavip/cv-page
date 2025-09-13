import { useState } from 'react'
import './App.css'
import PersonalForm from './components/PersonalForm';
import Display from './components/Display'

function App() {
  const [data, setData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    education: [],
    experience: []
  });

  return (
    <div>
      <PersonalForm data={data} setData={setData}></PersonalForm>
      <Display personalInfo={data.personalInfo} />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Form from './components/Form'
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
      <Form title="Personal Information" data={data} setData={setData}>
        <label for="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />

        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />

        <label for="phone">Enter your phone number: </label>
        <small>e.g. 123-456-7890</small>
        <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
      </Form>
      <Display personalInfo={data.personalInfo} />
    </div>
  )
}

export default App

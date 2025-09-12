import { useState } from 'react'
import './App.css'

function Form(props) {
  return (
    <form>
      <label for="name">Enter your name: </label>
      <input type="text" name="name" id="name" required />
    </form>
  );
}

function App() {

  return (
    <Form></Form>
  )
}

export default App

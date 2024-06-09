import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useRef, useState } from 'react';

function App() {
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef('');

  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name] :  e.target.value})
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Submitted data: ", formData);
    setFormData({
      name:'',
      email: '',
      password: ''
    });
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <>
      <h2>Learnig useRef and forwardRef Hook in React</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="username"
          label="Enter Name: "
          ref = {nameRef}
          onChange = {handleInputChange}
        />
         <Input
          type="text"
          name="password"
          placeholder="password"
          label="Enter password: "
          ref = {passwordRef}
          onChange={handleInputChange}
        />
        <Input type="email"
          name="email"
          label="Enter email: "
          placeholder="email"
          ref={emailRef}
          onChange = {handleInputChange}
        />
        <Button text="Click Me" />
      </form>
    </>
  );
}

export default App;

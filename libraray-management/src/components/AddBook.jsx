import React, { useRef, useState } from 'react'
import Input from './form-input/Input'
import Button from '../components/form-input/Button';

export default function AddBook() {

    const bookNameRef = useRef();
    const bookAurthorRef = useRef();
    const [book, setBook] = useState({
    });
    
    const onChangeHandler = (e) => {
        setBook({...book, [e.target.name] : e.target.value})
    };

    const formHandler = (event) => {
        event.preventDefault();
        console.log("book", book);
    }

  return (
    <div className='items-center'>
        <form onSubmit={formHandler}>
            <Input 
                type="text"
                label = "Book Name:"
                name ="bookName"
                ref={bookNameRef}
                placeholder = " Book Name"
                onChange={onChangeHandler}
            />
            <Input 
                type="text"
                label = "Author Name:"
                name ="authorName"
                ref={bookAurthorRef}
                placeholder = " Author Name"
                onChange={onChangeHandler}
            />
            <Button className= "bg-slate-950 text-white" type="submit" text="Add Book" />
        </form>
    </div>
  )
}

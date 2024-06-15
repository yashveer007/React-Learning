import React, { useRef, useState } from "react";
import Input from "../form-input/Input";
import Button from "../form-input/Button";

export default function () {
  const nameref = useRef("");
  const passwordRef = useRef("");

  const [user, setUser] = useState({});

  const onChangehandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("user : ", user);
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" bg-gray-400 my-2 py-3 px-8">
        <div className="flex flex-col items-center">
            <h2>LogIn Form</h2>
        </div>
        <form onSubmit={submitHandler}>
          <Input
            label="Username"
            name="username"
            type="text"
            ref={nameref}
            placeholder="Username"
            onChange={onChangehandler}
          />
          <Input
            label="Password"
            name="password"
            type="text"
            ref={passwordRef}
            placeholder="Password"
            onChange={onChangehandler}
          />
          <div className="flex flex-col items-center ">
             <Button type="submit" text="Login" className="bg-green-400 px-4"/>
          </div>
        </form>
      </div>
    </div>
  );
}

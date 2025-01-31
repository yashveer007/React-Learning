import React, { useRef, useState } from "react";
import Input from "../form-input/Input";
import Button from "../form-input/Button";
import { doLogin } from "../../services/loginservice";
import { useDispatch } from "react-redux";
import { addUserName } from "../../sclices/loginSlice";
import { useNavigate } from 'react-router-dom'

export default function () {
  const nameref = useRef("");
  const passwordRef = useRef("");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangehandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let name = await doLogin(user);
    dispatch(addUserName({name,isLogin:true}));
    navigate("/")
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
            name="userName"
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
            <Button type="submit" text="Login" className="bg-green-400 px-4" />
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import Input from "../form-input/Input";
import Button from "../form-input/Button";
import { useSelector } from "react-redux";
import { doRegister } from "../../services/loginservice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserName } from '../../sclices/loginSlice'

export default function Login() {

  const userNameRef = useRef("");
  const emailRef = useRef("");
  const addressRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");

  // dispatching value to redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const { name } = useSelector((state) => state.login);
 // console.log("selector: ", name);

  const [user, setUser] = useState({});

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user: ", user);
    let { userName } = await doRegister(user);
    dispatch(addUserName(userName));
    navigate("/")
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" bg-gray-400 my-2 py-3 px-8">
        <div className="flex flex-col items-center">
          <h2>Register Form</h2>
        </div>
        <form onSubmit={submitHandler}>
          <Input
            label="Username"
            name="userName"
            type="text"
            ref={userNameRef}
            placeholder="Username"
            onChange={onChangeHandler}
          />
          <Input
            label="Name"
            name="name"
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            onChange={onChangeHandler}
          />
          <Input
            label="Email"
            name="email"
            type="text"
            ref={emailRef}
            placeholder="Email"
            onChange={onChangeHandler}
          />
          <Input
            label="Address"
            name="address"
            type="text"
            ref={addressRef}
            placeholder="Address"
            onChange={onChangeHandler}
          />
          <Input
            label="Password"
            name="password"
            type="text"
            ref={passwordRef}
            placeholder="Password"
            onChange={onChangeHandler}
          />
          <div className="flex flex-col items-center ">
            <Button
              type="submit"
              text="Register"
              className="bg-green-400 p-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

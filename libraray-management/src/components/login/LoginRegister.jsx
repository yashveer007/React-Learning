import React, { useState } from "react";
import Button from "../form-input/Button";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegister() {
  
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gray-300">
      <div className="flex flex-col items-center px-5 m-3">
        <div className="flex flex-row mt-2">
          <Button
            type="submit"
            text="Login"
            className="bg-blue-400 mx-4 px-[65px]"
            onClick={() => {
              setIsLogin(true);
            }}
          />
          <Button
            type="submit"
            text="Register"
            className="bg-green-400 px-[50px]"
            onClick={() => {
              setIsLogin(false);
            }}
          />
        </div>
        <div>{isLogin ? <Login /> : <Register />}</div>
      </div>
    </div>
  );
}

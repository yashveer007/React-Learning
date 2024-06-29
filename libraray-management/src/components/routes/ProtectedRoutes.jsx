import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoutes({Component, commonCss}) {

  const { isLogin } = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogin){
      navigate("/login")
    }
  })

  return (

    <div>
        <Component commonCss = {commonCss}/>
    </div>
  )
}

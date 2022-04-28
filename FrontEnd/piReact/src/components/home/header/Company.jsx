import React from 'react'
import logo from '../../../assets/img/logo1.png';
import { useNavigate } from 'react-router';

const Company = ({ props }) => {
  
  const navigate = useNavigate();

  return (

    <div class="company">
      <a onClick={()=> {navigate("/home")}}>
        <div class="logo">
          <img src={'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/logoDB.svg'} alt="logotipo" />
        </div>
        <h4 class="slogan">Sentite como en tu hogar</h4>
      </a>
    </div>
  )
}

export default Company

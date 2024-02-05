import React, { useState } from "react"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate()

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Akash", password: "akash47" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
        localStorage.setItem("CPS_user", JSON.stringify({ login: true, username:"Akash" }));
          const timer = setTimeout(() => {
         navigate('/StudentDetails')
        }, 2000);
       return () => clearTimeout(timer);
     }
    else {
      alert("invaled pass");
    }
  };

  return (
    <Main>
      <div className="bbb">
        {authenticated ? (
          <div className="modal-dialog modal-confirm  ">
            <div className="modal-content  ">
              <div className="modal-header">
                <div className="icon-box">
                  <i className="material-icons">&#xE876;</i>
                </div>
                <h4 className="modal-title w-100">Successfull</h4>
              </div>
              <div className="modal-body">
                <p className="text-center">
                  <span> Redirecting &nbsp;</span>
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">&nbsp; &nbsp;</span>
                  </div>  
                  <text>&nbsp;</text>
                  <div className="spinner-grow spinner-grow-sm" role="status"> 
                    <span className="sr-only">  </span>
                  </div>
                </p>
              </div>
              <div className="modal-footer">
              </div>
            </div>

          </div>
          ) : (

          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <label className="d-flex justify-content-center align-items-end">
              <h1>  Login Details </h1>
            </label> 
               
            <div className="login d-flex  align-items-center justify-content-center h-75 w-100">
              <form
                className=" d-flex   w-75 p-4 flex-column gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="Username"
                  placeholder=" Enter username "
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                <input
                  type="password"
                  name="Password"
                  placeholder=" Enter passpowd "
                  onChange={(e) => setpassword(e.target.value)}
                />
                <p className="w-100 text-white  m-0">Username = Akash  & Password = akash47  </p>
                <button
                  type="submit"
                  className="button w-50  align-self-end mt-4 "
                  value="Submit"
                >
                  {" "}
                  Login
                </button>
              </form>
            </div>
          </div>

        )}
        ;
      </div>
    </Main>
  );
};

export default Login;

const Main = styled.section`
 
  .bbb {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-family: "Jost", sans-serif;
  background: linear-gradient(to top, #006599, #302b63cd, #ff9933af);
  letter-spacing: 1px;
}

.main {
  background: linear-gradient(to bottom, #006599, #302b63, #ff9933);
  width: 350px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 10px 30px 60px #2020202c;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  height: 17%;
  color: #fff;
  font-size: 2.3em;
  font-weight: bold;
  cursor: pointer;
}
input {
  background: #f0efef;
  padding: 13px;
  outline: none;
  border: none;
  border-radius: 3px;
}
.button {
  letter-spacing: 1.5px;
  padding: 9px;
  color: #fff;
  background: #573b8a;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  transition: 0.2s ease-in;
  cursor: pointer;
  border-radius: 3px;
}
button:hover {
  background: #6d44b8;
} 

.modal-confirm {
  color: #636363;
  width: 325px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-confirm .modal-content {
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s;
  background-color: rgb(240, 239, 239);
}

.modal-confirm .modal-header {
  border-bottom: none;
  position: relative;
  
}
.modal-confirm h4 {
  text-align: center;
  font-size: 26px;
  margin: 30px 0 10px;
  color: rgb(45, 44, 44);
}

.modal-confirm .form-control,
.modal-confirm .btn {
  min-height: 40px;
  border-radius: 3px;
}
.modal-confirm .modal-footer {
  border: none;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
}
.modal-confirm .icon-box {
    animation: fill 0.2s ease-in-out 0.3s forwards,
    scale 0.4s ease-in-out 0.9s both;  
  color: #fff;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -70px;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  z-index: 9;
  background: #82ce34;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
} 
.modal-confirm .icon-box i {
  font-size: 58px;
  position: relative;
  top: 3px; 
 } 

.modal-confirm .btnt {
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  background: #82ce34;
  transition: all 0.4s;
  line-height: normal;
  border: none;
  cursor: auto;
  padding: 10px; 
}   
 `;

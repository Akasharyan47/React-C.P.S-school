import React  from "react";
import styled from "styled-components";
  // import { useDispatch } from "react-redux";
  // import { createUser } from "../../Feature/useDetailSlice";
import { useForm } from "react-hook-form";
const AddData = () => {
  const Main = styled.div` 
    .container {
      margin-top:10px;
      position: relative;
      max-width: 700px;
      width: 100%;
      height:550px;
      overflow-y: auto;
      background: #f9f9f9;
      padding: 25px; 
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
       margin-top: 50px;
       width:100vw;
    }}
    
    .container header {
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
      color: #333;
      font-weight: 500;
      text-align: center;
    }
    .container .form {
      margin-top: 30px;
    }
    .form .input-box {
      width: 100%;
      margin-top: 20px;
    }
    .input-box label {
      color: #333;
    }
    .form :where(.input-box input, .select-box) {
      position: relative;
      height: 40px;
      width: 100%;
      outline: none;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      color: #707070;
      margin-top: 8px;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 0 15px;
    }
    .input-box input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
    .form .column {
      display: flex;
      column-gap: 15px;
    }
    .form .gender-box {
      margin-top: 20px;
    }
    .gender-box h3 {
      color: #333;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      font-weight: 400;
      margin-bottom: 8px;
    }
    .form :where(.gender-option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 50px;
      flex-wrap: wrap;
    }
    .form .gender {
      column-gap: 5px;
    }
    .gender input {
      accent-color: rgb(130, 106, 251);
    }
    .form :where(.gender input, .gender label) {
      cursor: pointer;
    }
    .gender label {
      color: #707070;
    }
    label {
      height: 20%;
      color: #fff;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      font-weight: bold;
      cursor: pointer;
    }
    .address :where(input, .select-box) {
      margin-top: 10px;
    }
    .select-box select {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      color: #707070;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    }
    .form button {
      height: 40px;
      width: 100%;
      color: #fff;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      font-weight: 400;
      margin-top: 30px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      background: rgb(130, 106, 251);
    }
    .form button:hover {
      background: rgb(88, 56, 250);
    }
    /*Responsive*/
    @media screen and (max-width: 500px) {
      .form .column {
        flex-wrap: wrap;
      }
      .form :where(.gender-option, .gender) {
        row-gap: 15px;
      }
    }
  `; 
    // const dispatch = useDispatch();

  // const getUserData = (e) => {
  //   setUsers({ ...users, [e.target.name]: e.target.value }); 
    
  //   console.log("users...", users);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("users...", users);
  //   dispatch(createUser(users));
  // };
    // const [users, setUsers] = useState({});

  const { register, handleSubmit } = useForm();
 
  const onSubmit = (users) => { 
    console.log(users); 
      // dispatch(createUser(users));
  }
  return (
    <Main>
      <div>
          <section className="container">
          <header>Enter Details</header>
          <form  className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box">
              <label>Full Name</label>
             
              <input
                type="text"
                name="student_name"
                placeholder="Enter full name"
                 
                {...register("name")}
              />
            </div>

            <div className="input-box">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email address"
                {...register("email")}
                required
              />
            </div>

             <div className="column">
              <div className="input-box">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="studentnumber"
                  placeholder="Enter phone number"
                  {...register("studentnumber")}
                  required
                />
              </div>
              <div className="input-box">
                <label>Birth Date</label>
                <input
                  type="date"
                  name="birth"
                  placeholder="Enter birth date"
                  {...register("birth")}
                  required
                />  
                </div>
            </div> 
                 <div className="gender-box">
              <h3>Gender</h3>
                 <div className="gender-option">
                <div className="gender">
                  <input
                    type="radio"
                    id="check-male"
                    name="gender"
                    {...register("gender")}
                    checked
                  />
                  <label for="check-male">male</label>
                </div>
               <div className="gender">
                  <input
                    type="radio"
                    id="check-female"
                    name="gender"
                    {...register("gender")}
                  />
                  <label for="check-female">Female</label>
                </div>
              </div>
            </div>  
            <div className="input-box address">
               <div className="row">
                <div className="col-4">
                  <input
                    type="text"
                    name="student_id"
                    placeholder="Student_Id"
                    {...register("student_id")}
                    required
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    name="class"
                    placeholder="Class"
                    {...register("class")}
                    required
                  />
                </div>
                <div className="col-4">
                  <input
                    type="number"
                    name="roll"
                    placeholder="Roll"
                    {...register("roll")}
                    required
                  />
                </div>
              </div>  
               <div className="row">  
                 <div className="col-4">
                  <input
                    type="text"
                    name="father"
                    placeholder="Father name"
                    {...register("father")}
                    required
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    name="mother"
                    placeholder="Mother name"
                    {...register("mother")}
                    required
                  />
                </div>
                <div className="col-4">
                  <input
                    type="number"
                    placeholder="Parents number"
                    name="parentnumber"
                    {...register("parentnumber")}
                    required
                  />
                </div>
              </div> 
              <label>Address</label>
             <input
                type="text"
                name="address_1"
                placeholder="Enter street address"
                {...register("address_1")}
                required
              />
              <input
                type="text"
                name="aaddress_1"
                placeholder="Enter street address line 2"
                {...register("address_1")}
                required
              />  

              <div className="column">
                <input
                  type="text"
                  name="region"
                  placeholder="Enter your region"
                  {...register("region")}
                  required
                />
                <input
                  type="number"
                  name="postal"
                  placeholder="Enter postal code"
                  {...register("postal")}
                  required
                />
              </div>   
            </div>  

            <button  type={"submit"}>
              Submit
            </button>
          </form>
        </section>  
  
      </div>
    </Main>
  );
};

export default AddData;

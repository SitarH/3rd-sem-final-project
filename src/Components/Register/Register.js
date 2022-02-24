import React from 'react'
import './Register.css';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext'
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Login from '../Login/Login'
import { useNavigate } from 'react-router-dom';



function Register() {

        let route= useNavigate();

        const {state, dispatch} = useContext(UserContext);

        const [user, setuser] = useState({
            username: '',
            fname: '',
            lname: '',
            email: '',
            dateOfBirth: '',
            image: '',
            password: '',
            verify: '',
            city: '',
            street: '',
            house: '',

        })

        const [cities, setCities] = useState([])

        
        
        const CreateUser = (event) =>{
            event.preventDefault()
            let check1= PasswordConfirmation();
            if (check1){
                dispatch({type: USER_ACTIONS.ADD_USER, user})
                //localStorage.setItem('users',JSON.stringify([{user}]));
                alert("You have successfully registered"); 
                route('/login')
            }
            else{
                alert("Password Conformation failed, please try again")
            }
        }
         
              

        const UploadImage = async (event) =>{
            const files = event.target.files
            const data = new FormData();
            data.append('file', files[0])
            data.append('upload_preset', 'final_3rd_sem')
            const res = await fetch ('https://api.cloudinary.com/v1_1/dupaj3sj2/image/upload',
            {
                method: 'POST',
                body: data
            }
            )
            const file = await res.json()
            console.log(file.secure_url)
            setuser({...user,image: file.secure_url})
        }

        const AgeValidations = (dob) => {
            const today = new Date();
            let userAge =today.getFullYear() - dob.getFullYear();
            return userAge <= 120 && userAge > 0;
        }

        const ChooseCity = async () =>{
            const res = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1266')
            const data = await res.json();
            const cities = data.result.records.map(record => record['שם_ישוב_לועזי']);

            if (data.success) {
                setCities(cities);
            }
        }

        useEffect(() => {
          ChooseCity()
        }, [])

        const PasswordConfirmation = () => {
            if(user.password != user.verify)
                return false;
            else return true;
        }
    

    return (
        <form className="register flex-container flex-cols" onSubmit={event => CreateUser(event)}>
            <h2>CREATE NEW CUSTOMER ACCOUNT</h2>

            <input placeholder="Username" type="text" maxLength={60} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+" value={user.username} onChange={(event) =>  setuser({...user, username: event.target.value})}></input>
            <div className="input-group">
           <input placeholder="First Name" type="text" required={true} pattern="[A-Za-z]+" value={user.fname} onChange={(event) =>setuser({...user, fname: event.target.value})}></input>

           <input placeholder="Last Name" type="text" required={true} pattern="[A-Za-z]+" value={user.lname} onChange={(event) => setuser({...user, lname: event.target.value})}></input>
           </div>
           <input placeholder="Email" type="email" required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.com$" value={user.email} onChange={(event) => setuser({...user, email: event.target.value})}></input>
           <div className="input-group">
           <input placeholder="Date of Birth" type="date" required={true} value={user.dateOfBirth} onChange={(event) => AgeValidations(new Date(event.target.value))? setuser({...user, dateOfBirth: event.target.value}): alert("Invalid Date, try again")}></input>

           <input type="file" name="file" onChange={UploadImage}></input>
           </div>
           <div className="input-group">
           <input placeholder="Password" type="password" minLength={7} maxLength={12} required={true} pattern="^(?=.*[A-Za-z])(?=.*[!@#$%^*_=+-])(?=.*\d)[A-Za-z\d!@#$%^*_=+-]{7,12}$" value={user.password} onChange={(event) => setuser({...user, password: event.target.value})}></input>

           <input placeholder="Confirm password" type="password" minLength={7} maxLength={12} required={true} value={user.verify} onChange={(event) => setuser({...user, verify: event.target.value})}></input>
           </div>
           
           <select name="city" required={true} onChange={(event) =>setuser({...user, city: event.target.value})}>
           <option value="disable" disabled selected hidden>Choose City</option>
               {cities.map((city, index) => {
                    return <option key={index} value={city}>{city}</option>   
               })}
           </select>
           <div className="input-group">
           <input placeholder="Street" type="text" pattern="[א-ת]+" required={true} value={user.street} onChange={(event) =>setuser({...user, street: event.target.value})}></input>
        
           <input placeholder="House number" type="number" required={true} pattern="[0-9]+" value={user.house} onChange={(event) =>setuser({...user, house: event.target.value})}></input>
           </div>
            
           <button className="btn sign" type="submit">Submit</button>
        </form>
    )
}


export default Register

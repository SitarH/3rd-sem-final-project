import React from 'react'
import './Register.css';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext'
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Login from '../Login/Login'

function Register() {

        const {dispatch} = useContext(UserContext);

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

        const [cities, setcities] = useState([])
        


        const CreateUser = (event) =>{
            event.preventDefault()
            dispatch({type: USER_ACTIONS.ADD_USER , user})
            localStorage.setItem('users',JSON.stringify(user));
            alert("You have successfully registered"); 
           //return to empty object?
           //need UseEffect?
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
            let res = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1266')

            let data = await res.json();
            console.log(data)
            let cityName = data.result.fields[2].id;
            console.log(data.result.records[1])

            if(data.success)
                setcities([...cities,data.result.records.cityName])
                console.log(cities)

            //how the fuck do i do thattttt

        }

        useEffect(() => {
          ChooseCity()
        }, [])



    return (
        <form className="register flex-container flex-cols">
            <h2>CREATE NEW CUSTOMER ACCOUNT</h2>

            <label>Username</label>
            <input type="text" maxLength={60} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+" value={user.username} onChange={(event) =>  setuser({...user, username: event.target.value})}></input>

           <label>First Name</label>
           <input type="text" required={true} pattern="[A-Za-z]+" value={user.fname} onChange={(event) =>setuser({...user, fname: event.target.value})}></input>

           <label>Last Name</label>
           <input type="text" required={true} pattern="[A-Za-z]+" value={user.lname} onChange={(event) => setuser({...user, lname: event.target.value})}></input>

           <label>Email</label>
           <input type="email" required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={user.email} onChange={(event) => setuser({...user, email: event.target.value})}></input>

           <label>Date of Birth</label>
           <input type="date" required={true} value={user.dateOfBirth} onChange={(event) => AgeValidations(new Date(event.target.value))? setuser({...user, dateOfBirth: event.target.value}): alert("Invalid Date, try again")}></input>

           <label>Image</label>
           <input type="file" name="file" onChange={UploadImage}></input>

           <label>Password</label>
           <input type="password" minLength={7} maxLength={12} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*_=+-])+" value={user.password} onChange={(event) => setuser({...user, password: event.target.value})}></input>

           <label>Confirm password</label>
           <input type="password" minLength={7} maxLength={12} required={true} pattern={user.password} value={user.verify} onChange={(event) => setuser({...user, verify: event.target.value})}></input>

           <label>City</label>
           <select name="city" ></select>

           <label>Street</label>
           <input type="text" required={true} value={user.street} onChange={(event) =>setuser({...user, street: event.target.value})}></input>
            
           <label>House number</label>
           <input type="number" required={true} pattern="[0-9]+" value={user.house} onChange={(event) =>setuser({...user, house: event.target.value})}></input>
            
           <Link to="/login"><button type="submit" onClick={(event)=>CreateUser(event)}>Submit</button></Link>
        </form>
    )
}

export default Register

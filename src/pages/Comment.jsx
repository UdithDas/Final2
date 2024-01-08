import { TextField, Typography,Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Comment.css'
import axios from 'axios'


const Comment = (props) => {



  const [inputs, setInputs] = useState({
    restuarant: '',
    cuisine: '',
    contactno: '',
    manager: '',
    nooftables: '',
    country: '',
    state: '',
    district: '',
    userid: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const {name,value}=e.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
    }

    const addHandler =() =>{
        console.log("Clicked")
        console.log(inputs)
        axios.post("http://localhost:3005/new",inputs)
        .then((response) =>{
        alert("Record Saved")
        navigate('/Analytics');
        })
        .catch(err=>console.log(err))
        }

     
    

    return (
        <div className='form-container'>
        <Typography variant='h5' className='regs'>Registration</Typography><br></br>
            <form>
            <TextField  label="Restuarant" name='restuarant' variant="outlined" type='text' value={inputs.restuarant} onChange={inputHandler} required/><br/><br/>
            <TextField id="cuisine" name='cuisine' label="Cuisine Type" variant="outlined" type='text' value={inputs.cuisine} onChange={inputHandler}/><br/><br/>
            <TextField id="contactno" name='contactno' label="Contact no:" variant="outlined" type='phone' value={inputs.contactno} onChange={inputHandler}/><br/><br/>
            <TextField id="manager" name='manager' label="Manager" variant="outlined" type='text' value={inputs.manager} onChange={inputHandler}/><br/><br/>
            <TextField id="nooftables" name='nooftables' label="No of Tables for Booking" variant="outlined" type='number' value={inputs.nooftables} onChange={inputHandler}/><br/><br/>
            <FormControl sx={{ m: 1, minWidth: 220 }} >
        <InputLabel id="demo-simple-select-autowidth-label" >Country</InputLabel>
        <Select 
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={inputs.country}
          onChange={inputHandler}
          autoWidth
          name='country'
          label="Country"
        >
          <MenuItem value="country" >
            <em>None</em>
          </MenuItem>
          <MenuItem value={11}>America</MenuItem>
          <MenuItem value={13}>India</MenuItem>
          <MenuItem value={12}>Nepal</MenuItem>
        </Select>
      </FormControl><br/><br/>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={inputs.state}
          onChange={inputHandler}
          autoWidth
          name='state'
          label="State"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Andhra Pradesh</MenuItem>
          <MenuItem value={11}>Arunachal Pradesh</MenuItem>
          <MenuItem value={12}>Assam</MenuItem>
          <MenuItem value={13}>Bihar</MenuItem>
          <MenuItem value={14}>Chhattisgarh</MenuItem>
          <MenuItem value={15}>Goa</MenuItem>
          <MenuItem value={16}>Gujarat</MenuItem>
          <MenuItem value={17}>Haryana</MenuItem>
          <MenuItem value={18}>Himachal Pradesh</MenuItem>
          <MenuItem value={19}>Jharkhand</MenuItem>
          <MenuItem value={20}>Karnataka</MenuItem>
          <MenuItem value={21}>Kerala</MenuItem>
          <MenuItem value={22}>Madhya Pradesh</MenuItem>
          <MenuItem value={23}>Maharatra</MenuItem>
          <MenuItem value={24}>Manipur</MenuItem>
          <MenuItem value={25}>Meghalaya</MenuItem>
          <MenuItem value={26}>Mizoram</MenuItem>
          <MenuItem value={27}>Nagaland</MenuItem>
          <MenuItem value={28}>Odisha</MenuItem>
          <MenuItem value={29}>Punjab</MenuItem>
          <MenuItem value={30}>Rajasthan</MenuItem>
          <MenuItem value={31}>Sikkim</MenuItem>
          <MenuItem value={32}>Tamil Nadu</MenuItem>
          <MenuItem value={33}>Telangana</MenuItem>
          <MenuItem value={34}>Tripura</MenuItem>
          <MenuItem value={35}>Uttarakhand</MenuItem>
          <MenuItem value={36}>Uttar Pradesh</MenuItem>
          <MenuItem value={37}>West Bengal</MenuItem>
        </Select>
      </FormControl><br/><br/>
            <TextField id="dis" name='district' label="District" variant="outlined" type='text' value={inputs.district} onChange={inputHandler}/><br/><br/>
            <TextField id="uid" name='userid' label="User id" variant="outlined" type='text' value={inputs.userid} onChange={inputHandler}/><br/><br/>
            <TextField id="pwd" name='password' label="Password" variant="outlined" type='password' value={inputs.password} onChange={inputHandler}/><br/><br/>
            <Button variant="outlined" onClick={addHandler}>Register</Button>
            </form>
        </div>
    );
};

export default Comment;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormSchema from "../../validations/FormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


interface Props {}

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });

  let navigate = useNavigate();

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const countries: { label: string; value: number }[] = [
    { label: "India", value: 1 },
    { label: "USA", value: 2 },
    { label: "Japan", value: 3 },
  ];

  const states: { label: string; value: number }[] = [
    { label: "Delhi", value: 1 },
    { label: "Bihar", value: 2 },
    { label: "MP", value: 3 },
  ];
 

  const cities: { label: string; value: number }[] = [
    { label: "New delhi", value: 1 },
    { label: "South Delhi", value: 2 },
    { label: "Old delhi", value: 3 },
  ];

  const handleUserFormSubmit = (data: any) => {
    //const { dispatch } = store;
    console.log(data)
    //dispatch(setUserName(data.username));
    //localStrorageUtils.setUserName(data.username);
    navigate("/tablelist");
  };
  return (
    <div className="detail-block">
      <form onSubmit={handleSubmit(handleUserFormSubmit)}>
        <div className="data-row">
          <label>Name</label>
          <input {...register("fullname")} type="text" className="line-input" name="fullname" />
          <span className="error">{errors?.fullname?.message}</span>
        </div>
        <div className="data-row">
          <label>email</label>
          <input {...register("email")} type="text" className="line-input" name="email" />
          <span className="error">{errors?.email?.message}</span>
          </div>
        <div className="data-row">
          <label>Password</label>
          <input {...register("password")} type="password" className="line-input" name="password" />
          <span className="error">{errors?.password?.message}</span>
        </div>
        <div className="data-row">
          <label>Number</label>
          <input {...register("number")} type="text" className="line-input" name="number" />
          <span className="error">{errors?.number?.message}</span>
        </div>
        <div className="data-row">
          <label>Gender</label>
          <div className="RC-clock">
            <label>
            <input type="radio" name="gender" value="Male" /> Male
            </label>
          </div>
          <div className="RC-clock">
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
          </div>
        </div>
        <div className="data-row">
          <label>Language</label>
          <div className="RC-clock">
            <label>
              <input type="checkbox" name="language" value="Hindi" /> Hindi
            </label>
          </div>
          <div className="RC-clock">
            <label>
            <input type="checkbox" name="language" value="English" /> English
            </label>            
          </div>
        </div>
        <div className="data-row">
        <label>Country</label>
        {/* <Select {...register("countries")} options={countries} /> */}
        <select {...register("countries")} name="countries" onChange={(e)=>{setCountry(e.target.value)}} value={country}>
          <option value=""> please select a country</option>
          {countries.map((country, index) => {
            return (
              <option value={country.value} key={index}>
                {country.label}
              </option>
            );
          })}
        </select>
        </div>
        <div className="data-row">
        <label>State</label>
        <select name="states" value={state} onChange={(e)=>{setState(e.target.value)}}>
        <option value=""> please select a state</option>
          {states.map((state, index) => {
            return (
              <option value={state.value} key={index}>
                {state.label}
              </option>
            );
          })}
        </select>
        </div>
        <div className="data-row">
        <label>City</label>
        <select name="cities" value={city} onChange={(e)=>{setCity(e.target.value)}}>
        <option value=""> please select a city</option>
          {cities.map((city, index) => {
            return (
              <option value={city.value} key={index}>
                {city.label}
              </option>
            );
          })}
        </select>
        </div>
        <div className="data-row">
        <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;

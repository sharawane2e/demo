import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginSchema from "../../validations/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { store } from "../../redux/store";
import { setUserName } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import localStrorageUtils from "../../utils/localStrorage";

interface Props {}

export const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  let navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    const { dispatch } = store;
    dispatch(setUserName(data.username));
    localStrorageUtils.setUserName(data.username);
    navigate("/");
  };
  return (
    <div className="loginApp">
      <div className="loginBlock">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register("username")}
            type="text"
            placeholder="User ID"
            autoComplete="off"
            className="username"
            name="username"
          />
          <span className="error">{errors?.username?.message}</span>
          <input
            {...register("password")}
            type="password"
            autoComplete="off"
            placeholder="Password"
            className="password"
            name="password"
          />
          <span  className="error">{errors?.password?.message}</span>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

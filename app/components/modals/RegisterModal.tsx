'use client'
import React from 'react'
import axios from 'axios';

import { AiFillGithub} from 'react-icons/ai';
import {FcGoogle} from "react-icons/fc";
import {useState} from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

import useRegisterModal from '@/app/hooks/useRegisterModule';

const RegisterModal=()=> {
    const registerModal = useRegisterModal();
     const [isLoading,setIsLoading] =useState(false);

     const {register,handleSubmit,formState:{errors,}}=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
     });

     const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        axios.post('/api/register',data)
            .then(()=>{
                registerModal.onClose();
            })
            .catch( (err) => {
                console.log(err)
            })
            .finally(()=>{
                setIsLoading(false);
            })
     }


  return (
    <div>RegisterModal</div>
  )
}

export default RegisterModal
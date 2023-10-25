'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import signUp from '../../../public/signup.svg'
import axios from 'axios';

const SignUp = () => {

    const [info, setinfo] = useState ('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const country = form.country.value;

        const updateInfo=
        {
            name,
            email,
            phone,
            country,
        }
        setinfo(updateInfo)

        axios.post('http://localhost:5000/user', {
             updateInfo

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    console.log(info)

    return (
        <div className='bg-blue-200 h-screen  flex justify-center items-center gap-6 flex-col'>
            <h2 className='mb-5 font-bold text-3xl'>Sign Up</h2>
            <div className='rounded-lg bg-slate-600 w-1/2 p-10  flex  justify-center items-center gap-6 '>

                <form onSubmit={handleSubmit} className=''>
                    <p>Name:</p>
                    <input type='text'name='name' className='mb-5 rounded-lg text-xs h-6 w-full placeholder:text-xs ps-2 focus:outline-none' placeholder='name' />

                    <p>Email</p>
                    <input type='email'name='email' className=' mb-5 rounded-lg text-xs h-6 w-full placeholder:text-xs ps-2 focus:outline-none' placeholder='example@gmail.com' />

                    <p>Phone</p>
                    <input type ='number'name='phone' className=' mb-5 rounded-lg text-xs h-6 w-full placeholder:text-xs f ps-2 focus:outline-none ' placeholder='+880 174-781-0390' />

                    <p>Country</p>
                    <select  name='country' className='rounded-lg w-56 te focus:outline-none  text-xs h-6'>
                        <option >Afganistan</option>
                        <option> Bangladesh</option>
                        <option> Russsia</option>
                        <option> Palestin</option>
                    </select>

                    <button className=' rounded-lg font-semibold bg-indigo-400 w-24 block mt-5 focus:outline-none '>
                        Submit
                    </button>

                </form>

                <div className=''>
                    <Image className='w-full ' src={signUp}></Image>
                </div>

            </div>


        </div>
    );
};

export default SignUp;

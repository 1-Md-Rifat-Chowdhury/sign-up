
'use client'
import Image from 'next/image';
import React from 'react';
import signUp from '../../../public/signup.svg'

const SignUp = () => {
    return (
        <div className='bg-blue-200 h-screen flex justify-center items-center gap-6 flex-col'>
            <h2 className='mb-5 font-bold text-3xl'>Sign Up</h2>
            <div className='p-10  flex bg-  justify-center items-center gap-6'>

                <form className=''>


                    <div>
                        <p>Name:</p>
                        <input className='mb-5 rounded-lg placeholder:text-xs ps-2' placeholder='name' />
                    </div>
                    <div>
                        <p>Email</p>
                        <input className=' mb-5 rounded-lg placeholder:text-xs ps-2' placeholder='name' />
                    </div>
                    <div>
                        <p>Phone</p>
                        <input className=' mb-5 rounded-lg placeholder:text-xs ps-2' placeholder='name' />
                    </div>
                    <div>
                        <p>Country</p>
                        <input className='rounded-lg placeholder:text-xs ps-2' placeholder='name' />
                    </div>


                </form>

                <div className='w-1/4'>
                    <Image className='w-full' src={signUp}></Image>
                </div>

            </div>


        </div>
    );
};

export default SignUp;

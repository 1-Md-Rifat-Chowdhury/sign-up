'use client'
import Link from 'next/link';
import React from 'react';

const LayOut = () => {
    return (
        <div>
             
            <div className='mb-2 bg-slate-400 font-bold text-3xl text-center font-rifat'>
                Logo
            </div>
            <div className='bg-slate-400 text-center mb-5 py-4 text-red-600 '>
                
                <Link className='underline' href='/'>Home</Link>
                <Link className='underline ps-2' href='/'>Home</Link>
                <Link className='underline ps-2' href='/'>Home</Link>
                <Link className='underline ps-2' href='/'>Home</Link>

            </div>
            <div className='w-full h-24 bg-slate-400   mb-2 relative'>
                <p className='mt-[-10px absolute top-[-6px] left-1/2'>Features</p>
            </div>
            <div className='flex gap-5 mb-5 text-center'>
                <div className='bg-slate-400 w-1/3 h-28'>
                    one
                </div>
                <div className='bg-slate-400 w-1/3 h-28 '>
                    two
                </div>
                <div className='bg-slate-400 w-1/3 h-28'>
                    three
                </div>
                
            </div>
            <div className='bg-slate-400 text-center h-16'>
                @ Copyright 2023
            </div>
           
            
        </div>
    );
};

export default LayOut;
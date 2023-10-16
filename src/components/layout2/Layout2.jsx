import React from 'react';

const Layout2 = () => {
    return (


       <div className='flex gap-4'>

            <div className='w-2/4'>
                <div className='flex justify-start gap-4 '>
                    <div className='bg-slate-500 w-1/2'>A</div>
                    <div className='bg-slate-500 w-1/2'>B</div>
                                        
                </div>

                <div className=' flex mt-3 gap-2 '>

                    <div className=''>
                       
                        <div className='bg-slate-500 mb-3'>C</div>
                        <div className='bg-slate-500 '>D</div>
                    </div>
                    
                    <div className='bg-slate-500 w-full'>E</div>

                    

                </div>
            </div>    

            <div className='flex gap-4 w-2/4'>
                <div className='bg-slate-500 w-1/2'>
                    F
                </div>
                <div className='w-1/2'>
                    <div className='bg-slate-500  mb-3 h-3/5'>
                        G
                    </div>
                    <div className='bg-slate-500'>
                        H
                    </div>
                </div>             

            </div>

        </div>
        
    );
};

export default Layout2;
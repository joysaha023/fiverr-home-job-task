import React from 'react';

const FiverLogo = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='bg-[#FFF6F2] rounded-2xl flex flex-col lg:flex-row justify-center items-center p-10 mt-16'>
                <div className='space-y-5'>
                    <h2 className='text-2xl'><span className='font-bold'>fiverr</span> logo maker</h2>
                    <h2 className='text-6xl'>Make an incredible <br />
                    logo <span className='text-[#FC832B]'>in seconds</span></h2>
                    <p className='text-xl text-slate-400'>Pre-designed by top talent. Just add your touch.</p>
                    <button className='btn-sm bg-black text-white rounded-md'>Try Fiverr Logo Maker</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/XC4Shkx/logo-maker-lohp0s0s0s.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FiverLogo;
import * as React from 'react';
import Switch from '@mui/material/Switch';

const TopComponent = () => {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return (
        <div className='px-36 py-4'>
            <div className='pt-5 grid grid-cols-2 items-center'>
                <div className='col-span-1'>
                    <h1 className='font-inter-bold text-3xl text-darkblue'>Social Media Dashboard</h1>
                    <p className='font-inter-bold text-darkgrayblue'>Total Followers: 23,004</p>
                </div>
                <div className='col-span-1 flex justify-end items-center'>
                    <p className='font-inter-bold text-darkgrayblue'>Dark Mode</p>
                    <Switch {...label} defaultChecked color="default" />
                </div>
            </div>
        </div>
    )
}

export default TopComponent

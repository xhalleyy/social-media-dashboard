import * as React from 'react';
import Switch from '@mui/material/Switch';

type DarkModeProp = {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const TopComponent = ({isDarkMode, setIsDarkMode}: DarkModeProp) => {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    const handleDarkMode = () => {
        setIsDarkMode(isDarkMode => !isDarkMode);
    }

    const lightModeTitle: string = 'font-inter-bold text-3xl text-darkblue';
    const darkModeTitle: string = 'font-inter-bold text-3xl text-white';
    const lightModeText: string = 'font-inter-bold text-darkgrayblue';
    const darkModeText: string = 'font-inter-bold text-bluetext';

    return (
        <div className='px-36 py-4'>
            <div className='pt-5 grid grid-cols-2 items-center'>
                <div className='col-span-1'>
                    <h1 className={!isDarkMode ? lightModeTitle : darkModeTitle}>Social Media Dashboard</h1>
                    <p className={!isDarkMode ? lightModeText : darkModeText}>Total Followers: 23,004</p>
                </div>
                <div className='col-span-1 flex justify-end items-center'>
                    <p className={!isDarkMode ? lightModeText : darkModeText}>Dark Mode</p>
                    <Switch {...label} color="default" onClick={handleDarkMode}/>
                </div>
            </div>
        </div>
    )
}

export default TopComponent

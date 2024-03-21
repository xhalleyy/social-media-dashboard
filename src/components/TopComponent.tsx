import * as React from 'react';
import { ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';

type DarkModeProp = {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const TopComponent = ({isDarkMode, setIsDarkMode}: DarkModeProp) => {
    const [switch1, setSwitch1] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode(isDarkMode => !isDarkMode);
        setSwitch1(!switch1);
    }

    const lightModeTitle: string = 'font-inter-bold desktop:text-3xl mobile:text-2xl text-darkblue';
    const darkModeTitle: string = 'font-inter-bold desktop:text-3xl mobile:text-2xl text-white';
    const lightModeText: string = 'font-inter-bold text-darkgrayblue desktop:text-md mobile:text-sm mobile:pb-5 desktop:pb-0 desktop:border-0 mobile:border-b mobile:border-darkgrayblue';
    const darkModeText: string = 'font-inter-bold text-bluetext desktop:text-md mobile:text-sm mobile:pb-5 desktop:pb-0 desktop:border-0 mobile:border-b mobile:border-darkgrayblue';
    const lightModeToggle: string = 'font-inter-bold text-darkgrayblue desktop:text-md mobile:text-sm';
    const darkModeToggle: string = 'font-inter-bold text-bluetext desktop:text-md mobile:text-sm';

    return (
        <div className='desktop:px-36 mobile:px-6 py-4'>
            <div className='pt-5 grid grid-cols-2 items-center'>
                <div className='desktop:col-span-1 mobile:col-span-2'>
                    <h1 className={!isDarkMode ? lightModeTitle : darkModeTitle}>Social Media Dashboard</h1>
                    <p className={!isDarkMode ? lightModeText : darkModeText}>Total Followers: 23,004</p>
                </div>
                <div className='hidden desktop:flex desktop:col-span-1 mobile:col-span-2 justify-end items-center gap-3'>
                    <p className={!isDarkMode ? lightModeToggle : darkModeToggle}>Dark Mode</p>
                    <ToggleSwitch checked={switch1}  onChange={handleDarkMode} />
                </div>
                <div className='desktop:hidden col-span-2 grid grid-cols-2 items-center gap-3 pt-5'>
                    <p className={!isDarkMode ? lightModeToggle : darkModeToggle}>Dark Mode</p>
                    <div className='flex justify-end'>
                    <ToggleSwitch checked={switch1}  onChange={handleDarkMode} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopComponent

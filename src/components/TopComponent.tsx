import * as React from 'react';
import { CustomFlowbiteTheme, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';

type DarkModeProp = {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>

}

const TopComponent = ({isDarkMode, setIsDarkMode}: DarkModeProp) => {
    const [switch1, setSwitch1] = useState(true);

    const handleDarkMode = () => {
        setIsDarkMode(isDarkMode => !isDarkMode);
        setSwitch1(!switch1);
    }

    const lightTheme: CustomFlowbiteTheme['toggleSwitch'] = {
        "root": {
            "active": {
                "on": "cursor-pointer !toggleBG !rounded-full ",
                "off": "cursor-not-allowed opacity-50 !toggleBG !rounded-full "
            }
        },
        "toggle": {
            "base": "toggle-bg rounded-full border-0",
            "checked": {
                "on": "after:translate-x-full after:border-white border-0 !bg-lighttoggle !active:toggleBG",
                "off": "border-0 toggleBG dark:border-gray-600 dark:bg-gray-700 !active:toggleBG "
            },
            "sizes" : {
                "md": "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5"
            }
        }
    }

    const customTheme: CustomFlowbiteTheme['toggleSwitch'] = {
        "root": {
            "active": {
                "on": "cursor-pointer !toggleBG !rounded-full ",
                "off": "cursor-not-allowed opacity-50 !toggleBG !rounded-full "
            }
        },
        "toggle": {
            "base": "toggle-bg rounded-full border-0",
            "checked": {
                "on": "after:translate-x-full after:border-white border-0 !bg-lighttoggle !active:toggleBG",
                "off": "border-0 toggleBG dark:border-gray-600 dark:bg-gray-700 !active:toggleBG "
            },
            "sizes" : {
                "md": "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-darkblue after:border-0"
            }
        }
    }

    const lightModeTitle: string = 'font-inter-bold large:text-3xl mobile:text-2xl text-darkblue';
    const darkModeTitle: string = 'font-inter-bold large:text-3xl mobile:text-2xl text-white';
    const lightModeText: string = 'font-inter-bold text-darkgrayblue large:text-md mobile:text-sm mobile:pb-5 large:pb-0 large:border-0 mobile:border-b mobile:border-darkgrayblue';
    const darkModeText: string = 'font-inter-bold text-bluetext large:text-md mobile:text-sm mobile:pb-5 large:pb-0 large:border-0 mobile:border-b mobile:border-darkgrayblue';
    const lightModeToggle: string = 'font-inter-bold text-darkgrayblue large:text-md mobile:text-sm';
    const darkModeToggle: string = 'font-inter-bold text-bluetext large:text-md mobile:text-sm';

    return (
        <div className='large:px-36 mobile:px-6 py-4'>
            <div className='pt-5 grid grid-cols-2 items-center'>
                <div className='large:col-span-1 mobile:col-span-2'>
                    <h1 className={!isDarkMode ? lightModeTitle : darkModeTitle}>Social Media Dashboard</h1>
                    <p className={!isDarkMode ? lightModeText : darkModeText}>Total Followers: 23,004</p>
                </div>
                <div className='hidden large:flex large:col-span-1 mobile:col-span-2 justify-end items-center gap-3'>
                    <p className={!isDarkMode ? lightModeToggle : darkModeToggle}>Dark Mode</p>
                    <ToggleSwitch theme={!isDarkMode ? lightTheme : customTheme} checked={switch1}  onChange={handleDarkMode} />
                </div>
                <div className='large:hidden col-span-2 grid grid-cols-2 items-center gap-3 pt-5'>
                    <p className={!isDarkMode ? lightModeToggle : darkModeToggle}>Dark Mode</p>
                    <div className='flex justify-end'>
                    <ToggleSwitch theme={!isDarkMode ? lightTheme : customTheme} checked={switch1}  onChange={handleDarkMode} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopComponent

import { Card, CustomFlowbiteTheme } from 'flowbite-react';

type DarkModeProp = {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>

}

const CardsComponent = ({isDarkMode, setIsDarkMode}: DarkModeProp) => {

    const customTheme: CustomFlowbiteTheme['card'] = {
        "root": {
            "children": "flex h-full flex-col justify-center gap-0 p-5"
        }
    }

    const bottomTheme: CustomFlowbiteTheme['card'] = {
        "root": {
            "children": "flex h-full flex-col justify-center gap-0 py-6 large:p-4 desktop:py-6 px-7 desktop:px-7 "
        }
    }

    const lightcardtag: string = '!font-inter-bold !text-darkgrayblue';
    const lightnumberclass: string = '!font-inter-bold !text-darkblue text-6xl';
    const lightfollowers: string = '!font-inter-reg !text-darkgrayblue !tracking-[.4em] text-sm';
    const darkcardtag: string = '!font-inter-bold !text-bluetext';
    const darknumberclass: string = '!font-inter-bold !text-white text-6xl';
    const darkfollowers: string = '!font-inter-reg !text-bluetext !tracking-[.4em] text-sm'

    const lightsmallcard: string = 'max-w-sm !font-inter-bold !bg-lightgrayblue !shadow-none border-0 light-active hover:cursor-pointer';
    const lighttext: string = 'text-darkgrayblue col-span-1';
    const lightsmallnum: string = 'col-span-1 text-darkblue text-4xl'
    const darksmallcard: string = 'max-w-sm !font-inter-bold !bg-bluecard !shadow-none border-0 dark-active hover:cursor-pointer';
    const darktext:string = 'text-bluetext col-span-1'
    const darksmallnum: string = 'col-span-1 text-white text-4xl';


    return (
        
        <div className={`large:px-36 mobile:px-6`}>
            <div className='grid grid-cols-4 desktop:gap-8 large:gap-5 mobile:gap-6'>
                <div className='large:col-span-1 mobile:col-span-4'>
                    <Card theme={customTheme} 
                        className={!isDarkMode ? 'max-w-sm border-t-4 !bg-lightgrayblue !shadow-none border-facebook border-x-0 border-b-0 light-active !gap-0 hover:cursor-pointer' : 'max-w-sm border-t-4 !bg-bluecard !shadow-none border-facebook border-x-0 border-b-0 dark-active !gap-0 hover:cursor-pointer'}>
                        <div className='flex justify-center items-center pt-2 gap-2'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg></span>
                            <p className={!isDarkMode ? lightcardtag : darkcardtag} style={{ fontSize: 14 }}>
                                @nathanf
                            </p>
                        </div>
                        <div className='flex justify-center mt-5 mb-1'>
                            <h2 className={!isDarkMode ? lightnumberclass : darknumberclass}>1987</h2>
                        </div>
                        <div className='flex justify-center '>
                            <p className={!isDarkMode ? lightfollowers : darkfollowers}>FOLLOWERS</p>
                        </div>
                        <div className='flex justify-center items-center gap-1 mt-6 mb-1'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg></span>
                            <p className='!font-inter-bold !text-lime' style={{ fontSize: 14 }}>12 Today</p>
                        </div>
                    </Card>
                </div>
                <div className='large:col-span-1 mobile:col-span-4'>
                    <Card theme={customTheme} 
                        className={!isDarkMode ? 'max-w-sm border-t-4 !bg-lightgrayblue !shadow-none border-twitter border-x-0 border-b-0 light-active !gap-0 hover:cursor-pointer' : 'max-w-sm border-t-4 !bg-bluecard !shadow-none border-twitter border-x-0 border-b-0 dark-active !gap-0 hover:cursor-pointer'}>
                        <div className='flex justify-center items-center pt-2 gap-2'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg></span>
                            <p className={!isDarkMode ? lightcardtag : darkcardtag} style={{ fontSize: 14 }}>
                                @nathanf
                            </p>
                        </div>
                        <div className='flex justify-center mt-5 mb-1'>
                            <h2 className={!isDarkMode ? lightnumberclass : darknumberclass}>1044</h2>
                        </div>
                        <div className='flex justify-center '>
                            <p className={!isDarkMode ? lightfollowers : darkfollowers}>FOLLOWERS</p>
                        </div>
                        <div className='flex justify-center items-center gap-1 mt-6 mb-1'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg></span>
                            <p className='!font-inter-bold !text-lime' style={{ fontSize: 14 }}>99 Today</p>
                        </div>
                    </Card>
                </div>
                <div className='large:col-span-1 mobile:col-span-4 rounded-2xl'>
                    <Card theme={customTheme} 
                        className={!isDarkMode ? 'max-w-sm border-t-4 !bg-lightgrayblue !shadow-none igborder border-x-0 border-b-0 light-active !gap-0 hover:cursor-pointer' : 'max-w-sm border-t-4 !bg-bluecard !shadow-none igborder border-x-0 border-b-0 dark-active !gap-0 hover:cursor-pointer'}>
                        <div className='flex justify-center items-center pt-2 gap-2'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg></span>
                            <p className={!isDarkMode ? lightcardtag : darkcardtag} style={{ fontSize: 14 }}>
                                @realnathanf
                            </p>
                        </div>
                        <div className='flex justify-center mt-5 mb-1'>
                            <h2 className={!isDarkMode ? lightnumberclass : darknumberclass}>11k</h2>
                        </div>
                        <div className='flex justify-center '>
                            <p className={!isDarkMode ? lightfollowers : darkfollowers}>FOLLOWERS</p>
                        </div>
                        <div className='flex justify-center items-center gap-1 mt-6 mb-1'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg></span>
                            <p className='!font-inter-bold !text-lime' style={{ fontSize: 14 }}>1099 Today</p>
                        </div>
                    </Card>
                </div>
                <div className='large:col-span-1 mobile:col-span-4'>
                    <Card theme={customTheme} 
                        className={!isDarkMode ? 'max-w-sm border-t-4 !bg-lightgrayblue !shadow-none border-youtube border-x-0 border-b-0 light-active !gap-0 hover:cursor-pointer' : 'max-w-sm border-t-4 !bg-bluecard !shadow-none border-youtube border-x-0 border-b-0 dark-active !gap-0 hover:cursor-pointer'}>
                        <div className='flex justify-center items-center pt-2 gap-2'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg></span>
                            <p className={!isDarkMode ? lightcardtag : darkcardtag} style={{ fontSize: 14 }}>
                                Nathan F.
                            </p>
                        </div>
                        <div className='flex justify-center mt-5 mb-1'>
                            <h2 className={!isDarkMode ? lightnumberclass : darknumberclass}>8239</h2>
                        </div>
                        <div className='flex justify-center '>
                            <p className={!isDarkMode ? lightfollowers : darkfollowers}>SUBSCRIBERS</p>
                        </div>
                        <div className='flex justify-center items-center gap-1 mt-6 mb-1'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg></span>
                            <p className='!font-inter-bold !text-brightRed' style={{ fontSize: 14 }}>144 Today</p>
                        </div>

                    </Card>
                </div>
            </div>

            <div className='pt-9'>
                <h1 className={!isDarkMode ? 'font-inter-bold text-2xl text-darkgrayblue' : 'font-inter-bold text-2xl text-bluetext'}>Overview - Today</h1>
                <div className='grid grid-cols-4 desktop:gap-8 large:gap-5 mobile:gap-4 mt-5'>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Page Views</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>87</h2>
                                <div className='col-span-1 text-lime flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>3%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Likes</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>52</h2>
                                <div className='col-span-1 text-brightRed flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>2%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Likes</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>5462</h2>
                                <div className='col-span-1 text-lime flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>2257%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Profile Views</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>52k</h2>
                                <div className='col-span-1 text-lime flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>1375%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='grid grid-cols-4 desktop:gap-8 large:gap-5 mobile:gap-4 mt-5'>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Retweets</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>117</h2>
                                <div className='col-span-1 text-lime flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>303%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Likes</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>507</h2>
                                <div className='col-span-1 text-lime flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>553%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='large:col-span-1 mobile:col-span-4'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Likes</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z"/></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>107</h2>
                                <div className='col-span-1 text-brightRed flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>19%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='large:col-span-1 mobile:col-span-4 pb-10'>
                        <Card theme={bottomTheme} className={!isDarkMode ? lightsmallcard : darksmallcard}>
                            <div className='grid grid-cols-2' >
                                <p className={!isDarkMode ? lighttext : darktext} style={{ fontSize: 14 }}>Total Views</p>
                                <span className='col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z"/></svg></span>
                            </div>
                            <div className='grid grid-cols-2 mt-5 items-end'>
                                <h2 className={!isDarkMode ? lightsmallnum : darksmallnum}>1407</h2>
                                <div className='col-span-1 text-brightRed flex justify-end items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                    </span>
                                    <p style={{ fontSize: 14 }}>12%</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsComponent

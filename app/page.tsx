"use client"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState ,useEffect} from 'react'
import MobileMenu from '@/components/mobileMenu'
import Link from 'next/link'

export default function Home() {
  const [openMenu, setOpenMenu]= useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [colorNavbar, setColorNavbar] =useState(false);
  const changeColor = ()=>{
    if(window.scrollY >80)
    {
      setColorNavbar(true);
    }
    else{
      setColorNavbar(false);
    }
  }
  window.addEventListener("scroll", changeColor)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700); // Đặt về true nếu như kích thước màn hình <600
    };
    window.addEventListener('resize', handleResize); // Gọi hàm handleResize khi cửa sổ được điều chỉnh kích thước

    // Gỡ bỏ event listener khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleClickOpenMenu =() => {
    setOpenMenu(!openMenu)
  }
  const handleClickGoToSection = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <header className="w-full h-[700px]  header bg-center bg-cover bg-no-repeat flex flex-col " id='Home'>
            <nav className="z-50 px-10 sm:px-15 md:px-20 w-full flex h-[80px] items-center bg-white justify-center fixed top-0 opacity-80">
                <div className="w-full h-full flex items-center justify-between mx-auto">
                       <a href="#" className="text-[36px] font-bold text-black">HK</a>
                       {
                        isMobile?(
                          <>
                          {openMenu?(
                            <>
                            <MobileMenu handleClickGoToSection={handleClickGoToSection}/>
                          <div className='w-2/12 h-full flex items-center justify-end text-lg font-medium ml-auto'>
                            <FontAwesomeIcon icon={faXmark} className='md:hidden text-xs text-slate-950 h-10 text-slate-100' onClick={handleClickOpenMenu} />
                          </div>
                          </>
                        ):(
                        <div className='w-2/12 h-full flex items-center justify-end text-lg font-medium ml-auto'>
                          <FontAwesomeIcon icon={faBars} className='md:hidden text-slate-950 text-xs h-10 text-slate-100' onClick={handleClickOpenMenu} />
                        </div>
                      )}
                          </>
                     ):(
                      <div className="group-button w-8/12 h-full flex items-center justify-end text-lg font-medium ml-auto">
                        <ul className="flex text-black justify-end">
                            <li className="px-4"><button onClick={() => handleClickGoToSection('#Home')}>Home</button></li>
                            <li className="px-4"><button onClick={() => handleClickGoToSection('#aboutme')}>About</button></li>
                            <li className="px-4"><button onClick={() => handleClickGoToSection('#myprojects')}>Projects</button></li>
                            <li className="pl-4"><button onClick={() => handleClickGoToSection('#contact')}>Contact</button></li>
                        </ul>
                      </div>
                     )
                       }   
                </div>
            </nav>
            <div className="z-0 header-centent w-full flex relative justify-center items-center h-full flex-col bg-gradient-to-t from-white via-transparent">
            <div className="items-center text-5xl sm:text-6xl md:text-7xl font-bold text-stone-500">
                Hi,
            </div>
            <div className="items-center text-5xl sm:text-6xl md:text-7xl font-bold text-stone-500 py-5">
                I am Huỳnh Kha
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-light ">
                Fresher Web Developer
            </div>
        </div>
    </header>
    <section className='w-full h-fit' id="aboutme">
      <div className='flex flex-col sm:flex-row '>
        <Image src='/../public/image/huynhkha.jpg' alt='avt' width={400} height={70} className='w-8/12 sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-transparent to-white rounded-full mx-auto sm:mx-15 md:mx-20'/>
        <div className='flex flex-col justify-center items-center mt-4'>
          <div className='text-lg sm:text-3xl text-stone-500 sm:justify-start  w-full md:pl-10 flex justify-center'>
            Who Am I?
          </div>
          <p className='font-bold text-3xl sm:text-6xl sm:justify-start text-stone-500 w-full md:pl-10 flex justify-center'>
            About me
          </p>
          <p className=' px-10 sm:pr-20 text-justify pt-4'>
          I am currently a fourth-year student at the University of Information Technology, majoring in Computer Science. My primary focus is on web development, specifically utilizing front-end technologies such as HTML5/CSS3, TailwindCSS, JavaScript, and ReactJS to create flexible user interfaces across multiple devices and build interactive websites that allow users to interact with data. In terms of the back-end, I am proficient in using Node.js to connect with databases and develop APIs to respond to user requests. Additionally, I have experience working with databases like MongoDB and MySQL for data management. Other skills in my repertoire include Git for flexible source code management and collaborative teamwork, as well as AWS cloud services for deploying applications to servers. These are the core skills I possess, and I believe they will be valuable assets to your esteemed company.
          </p>             
        </div>
      </div>
    </section>
    <section className='h-fit w-full'>
          <div className='font-bold text-3xl sm:text-6xl text-stone-500 w-full md:pl-10 flex mt-20 justify-center' id='myprojects'>
            My Projects
          </div>
          <div className='w-full pt-4 flex justify-center'>
             <ul className='flex sm:flex-row flex-col '>
             <li className='border-2 h-[200px] sm:h-[250px] sm:max-w-3/12 text-center text-lg sm:mx-6 mt-6 px-3 hover:shadow-lg hover:shadow-gray hover:cursor-pointer rounded-[30px]'>
                    <p className='mt-2 font-bold text-lg sm:text-xl'>Course Website</p>
                    <p className=' text-xs'>From 9/2022 to 12/2022</p>
                    <p className='mt-2 text-sm sm:text-lg'>Technology:</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Front-end: HTML,CSS, JS</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Back-end: MySQL, PHP</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Link:<Link href="https://github.com/Huynhkha28/project_IS207">https://github.com/Huynhkha28/project_IS207</Link> </p>
                </li>
                <li className='border-2 h-[200px] sm:h-[250px] sm:w-4/12 text-center text-lg sm:mx-6 mt-6 px-3 hover:shadow-lg hover:shadow-gray hover:cursor-pointer rounded-[30px]'>
                    <p className='mt-2 font-bold text-lg sm:text-xl'>Fordev Website</p>
                    <p className=' text-xs'>From 4/2023 to 6/2023</p>
                    <p className='mt-2 text-sm sm:text-lg'>Technology:</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Front-end: HTML,CSS, JS, ReactJS, TailwindCSS</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Back-end: MongoDB, NodeJS</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Link:<Link href="https://github.com/Huynhkha28/project_fordev">https://github.com/Huynhkha28/project_fordev</Link> </p>
                </li>
                <li className='border-2 h-[200px] sm:h-[250px] sm:w-4/12 text-center text-lg sm:mx-6 mt-6 px-3 hover:shadow-lg hover:shadow-gray hover:cursor-pointer rounded-[30px]'>
                    <p className='mt-2 font-bold text-lg sm:text-xl'>My Profile Website</p>
                    <p className=' text-xs'>From 1/6/2023 to 5/6/2023</p>
                    <p className='mt-2 text-sm sm:text-lg'>Technology:</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Front-end: HTML,TailwindCSS, ReactJS, TS</p>
                    <p className='text-start text-sm sm:text-base pl-2'>Back-end: None </p>
                    <p className='text-start text-sm sm:text-base pl-2'>Link:<Link href="https://github.com/Huynhkha28/project_fordev">https://github.com/Huynhkha28/myprofile</Link></p>
                </li>
             </ul>
          </div>
    </section>
    <section className="h-[400px] flex">
          <div className='font-semibold text-3xl sm:text-6xl text-stone-500 w-full flex flex-col mt-20 justify-center items-center sm:mx-20' id='contact'>
            <div className='bg-black  font-bold text-white py-4 px-8 w-fit h-fit text-center'>
               Personal Information
            </div>
                <div className='flex mx-10 mt-10'>
                  {isMobile?(<div className='flex flex-col hidden'>
                    <p className='text-xl sm:text-2xl '>Full name:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Date of birth:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Email:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Address:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Phone number:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Github:</p>
                  </div>):(<div className='flex flex-col'>
                    <p className='text-xl sm:text-2xl '>Full name:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Date of birth:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Email:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Address:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Phone number:</p>
                    <p className='text-xl sm:text-2xl mt-2'>Github:</p>
                  </div>)}
                  
                  <div className='flex flex-col pl-5'>
                    <p className=' text-xl sm:text-2xl'>Huỳnh Diệp Bảo Kha</p>
                    <p className='text-xl sm:text-2xl mt-2'>28/06/2002</p>
                    <p className='text-xl sm:text-2xl mt-2'>huynhkhaforwork@gmail.com</p>
                    <p className=' text-xl sm:text-2xl mt-2'>Thu Duc city, Ho Chi Minh city</p>
                    <p className=' text-xl sm:text-2xl mt-2'>0987588952</p>
                    <Link href='https://github.com/Huynhkha28'className=' text-xl  sm:text-2xl mt-2'>https://github.com/Huynhkha28</Link>
                  </div>
                  
                </div>
          </div>      
    </section>
    <footer className='w-full h-[80px] mt-10 flex justify-center items-center border-t-2'>
          <p>Design by HuynhKha - 2023 - Done in 5/6/2023</p>
    </footer>
    </>
  )
}

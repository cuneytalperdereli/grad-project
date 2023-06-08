import React, { useContext } from 'react'
import {  useNavigate } from 'react-router';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { AuthContext } from '../context/AuthContextProvider';

// Initialization for ES Users
import {
  Carousel,
  initTE,
} from "tw-elements";


initTE({ Carousel });

const Main = () => {

  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div >
<div
  id="carouselExampleCaptions"
  className="relative"
  data-te-carousel-init=""
  data-te-carousel-slide=""
>
  {/*Carousel indicators*/}
  <div
    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators=""
  >
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to={0}
      data-te-carousel-active=""
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to={1}
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to={2}
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"
    />
  </div>
  {/*Carousel items*/}
  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/*First item*/}
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active=""
      data-te-carousel-item=""
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
        className="block w-full"
        alt="..."
      />

      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">What 2-Do brings together all your missions, teammates and tools
</h5>
        <p>Even if the people on your team work in different places, you keep everything in one place.
</p>
<button

  type="button "
  
  className=" mt-5 mb-5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={()=> {
    !currentUser && alert("Please log in ")
  navigate("dragdrop")}}
>
  Get Started
</button>

      </div>
    </div>
    {/*Second item*/}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item=""
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">A new look at the working process
</h5>
        <p>View your team's project from every angle and bring a fresh perspective to the task at hand.
</p>
      </div>
    </div>
    {/*Third item*/}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item=""
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">Do more with What 2-Do
</h5>
        <p>What 2-Do's intuitive features allow teams to quickly create and customize a workflow for any job.
</p>
      </div>
    </div>
  </div>
  {/*Carousel controls - prev item*/}
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev"
  >
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Previous
    </span>
  </button>
  {/*Carousel controls - next item*/}
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next"
  >
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Next
    </span>
  </button>
</div>


    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your tasks?
          </h1>
          <p>Sign up to our site and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
 


<div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>LMTD Companies</h2>
              <p className='text-center text-4xl font-bold'>$189</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                  <p className='py-2 border-b mx-8'>2-5 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Big Companies</h2>
              <p className='text-center text-4xl font-bold'>$450</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Unlimited Storage</p>
                  <p className='py-2 border-b mx-8'>Unlimited User</p>
                  <p className='py-2 border-b mx-8'>Send up to 999999 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>





















    </div>
  )
}

export default Main
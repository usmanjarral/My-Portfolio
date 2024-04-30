import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Contact() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
      await axios.post("https://getform.io/f/warkpjkb", userInfo);
      toast.success('Your message has been sent');

    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return ( 
    <>
      <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>

        <div>
        <h1 className='text-3xl font-extralight'>Contact Me</h1>
        <p className='font-semibold'>Please fill out the form below to contact me</p>
        </div>

<div>
    <form onSubmit={handleSubmit(onSubmit)}
    //  action="https://getform.io/f/warkpjkb"
    // method="POST"

    className='mt-10 border-[2px] bg-slate-200 md:w-[400px] p-5 rounded-lg mx-auto'>

        <h1 className='text-xl font-semibold my-5'>Send Your Message</h1>

<div className='flex flex-col justify-center'>
<div>
<label  htmlFor="">Full Name</label><br />
<input {...register("name", { required: true })}  type="text" name='name' placeholder='Enter your fullname' className='bg-white px-4 py-2 rounded-lg w-[90%] shadow'/>
{errors.name && <span>This field is required</span>}
</div>
<br />

<div>
<label htmlFor="">Email Address</label><br />
<input {...register("email", { required: true })} type="email" name='email' placeholder='Enter your email address' className='bg-white px-4 py-2 rounded-lg w-[90%]  shadow'/>
{errors.email && <span>This field is required</span>}
</div>
<br />

<div>
<label htmlFor="">Message</label><br />
<input {...register("message", { required: true })} type="text" name='message' placeholder='Enter your Query' className='bg-white px-4 py-2 rounded-lg w-[90%] shadow'/>
{errors.message && <span>This field is required</span>}
</div>
<br />
</div>

<button type='submit' className='bg-black text-white px-2 py-1 rounded'>Send</button>




    </form>
</div>

      </div>
    </>
  )
}

export default Contact

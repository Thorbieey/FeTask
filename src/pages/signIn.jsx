import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React, { useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog"
import { useState } from 'react'
import "./signUp.css"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { EyeIcon, EyeOffIcon, ImageIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
  const navigate = useNavigate()
 
 
  const PasswordField1 = useRef()
  const [passwordView, setPasswordView] = useState({
    password1: false
  })
  const [loading, setLoading] = useState(false)
  const form = useRef()
  
  const [inputs, setInputs] = useState({})

  const handleShowPassword = (e, field) => {
    e.preventDefault()
    if (field.current.type === "password") {
      field.current.type = "text"
    } else {
      field.current.type = "password"
    }
    setPasswordView({ ...passwordView, password1: !passwordView.password1 })
  }



  const isValidEmail = (mail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    function validateForm(formData) {
      let errors = [];

      // Check if contact email address is provided and is in a valid format
      if (!formData.EmailAddress || !isValidEmail(formData.EmailAddress)) {
        alert("Please enter a valid email address.");
        errors.push("Please enter a valid email address.");
      }
    
      // Check if password is provided and meets minimum requirements
      if (!formData.Password || formData.Password.length < 8) {
        alert("Please enter a password with at least 8 characters.");
        errors.push("Please enter a password with at least 8 characters.");
      }
   

    
      return errors;
    }
    const error = validateForm(inputs)
    console.log(error)
    if (error.length > 0) {
      return
    }

    setLoading(true)
    setTimeout(() => {

      console.log("simulating post")
      setLoading(false)
      return navigate("/dashboard/verifiers")

    }, 3000)


  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputs(values => ({ ...values, [name]: value }))
  }
  return (
    <div className=' relative bg-[#F5F6F8] py-[72px] px-[120px] h-full w-full  '>
      <div className='flex justify-between  items-center'>
        <div>
          <img src="/LOGO.svg" alt="express logo" />
        </div>
        <div className='flex gap-2 items-center '>
          <span className=' text-sm text-[#606060] leading-4'>New to Xpress Rewards?</span>
          <Button onClick={() => navigate("/signUp")} variant="outline" className="px-4 py-2 border text-sm font-bold leading-4 border-[#039BF0] rounded text-[#039BF0]" >
            Sign Up
          </Button>
        </div>
      </div>
      <div className='w-full absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
        <div className='max-w-[522px] bg-white rounded-[8px] mx-auto p-10' style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.06)' }}>
          <div>
            <h1 className='text-2xl leading-7 text-[#039BF0] font-medium'>Welcome Back!</h1>
            <span className=' text-sm leading-[14px] text-[#606060]'>Sign in to your Xpress reward partner’s dashboard</span>
          </div>
          <Separator className=" mt-4 mb-6 h-[2px] bg-[#F5F6F8]" />
          <div>

            <form ref={form} onSubmit={handleSubmit} className=' filledFormed flex flex-col ' action="">
              <div  className=''>
                <div>
                  <label htmlFor="EmailAddress" className=''>
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Email Address</span>
                    <input 
                    type="text" 
                    required
                    name="EmailAddress"
                    onChange={handleOnChange}
                    value={inputs.EmailAddress || ''}
                    className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                    />
                  </label>
                </div>
                <div className='mt-6'>
                  <label htmlFor="Password" >
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Password</span>
                    <div className='relative  mt-2'>
                      <input 
                      ref={PasswordField1}
                      type="password" 
                      required
                      name="Password"
                      onChange={handleOnChange}
                      value={inputs.Password || ''}
                      className=' w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded ' 
                      /> 
                      
                      <button
                        onClick={(e) => {handleShowPassword(e, PasswordField1)}}
                      className='absolute right-3 top-1/2 -translate-y-1/2'>
                        { passwordView.password1 ? <EyeOffIcon/> :  <EyeIcon /> }
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <span className='font-medium text-sm mt-4 leading-4 text-[#606060]'>Forgot Password? <span className='cursor-pointer text-[#039BF0] '>Reset it</span></span>
              <div className='mt-6 flex items-center'>
                <div className='w-full'>
                  <Button type="submit" style={{boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)'}} className='w-full py-4 text-sm font-medium bg-[#039BF0] h-fit  leading-4'> { loading ? 'Loading...' : 'Sign in'}</Button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

// box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);

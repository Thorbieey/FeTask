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


const SignUp = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const inputRef = useRef()
  const section1a = useRef()
  const section1Texta = useRef()
  const section1Textb = useRef()
  const section1b = useRef()
  const section2a = useRef()
  const section2b = useRef()
  const section3a = useRef()
  const section3b = useRef()
  const PasswordField1 = useRef()
  const PasswordField2 = useRef()
  const Button1 = useRef()
  const Button2 = useRef()
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [passwordView, setPasswordView] = useState({
    password1: false,
    password2: false
  })


  

  const handleSectionChange = (e) => {
    e.preventDefault()

    section1a.current.classList.toggle("inVisibleSectionA")
    section1a.current.classList.toggle("VisibleSectionA")
    section1b.current.classList.toggle("VisibleSectionA")
    section1b.current.classList.toggle("inVisibleSectionA")

    section1Texta.current.classList.toggle("inVisibleSectionA")
    section1Texta.current.classList.toggle("VisibleSectionA")
    section1Textb.current.classList.toggle("VisibleSectionA")
    section1Textb.current.classList.toggle("inVisibleSectionA")

    section2a.current.classList.toggle("inVisibleSectionA")
    section2a.current.classList.toggle("VisibleSectionA")
    section2b.current.classList.toggle("VisibleSectionA")
    section2b.current.classList.toggle("inVisibleSectionA")

    section3a.current.classList.toggle("inVisibleSectionA")
    section3a.current.classList.toggle("VisibleSectionA")
    section3b.current.classList.toggle("VisibleSectionA")
    section3b.current.classList.toggle("inVisibleSectionA")

    Button1.current.classList.toggle("invisibleButtonA")
    Button1.current.classList.toggle("visibleButtonA")
    Button2.current.classList.toggle("visibleButtonA")
    Button2.current.classList.toggle("invisibleButtonA")

    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setStep(1)
    }

    
  }
  const [inputs, setInputs] = useState({})
  const [file, setfile] = useState(null)
  const [image, setimage] = useState(null)

  const handleShowPassword = (e, field) => {
    e.preventDefault()
    if (field.current.type === "password") {
      field.current.type = "text"
    } else {
      field.current.type = "password"
    }
    if (field === PasswordField1) {
      setPasswordView({ ...passwordView, password1: !passwordView.password1 })
    } else if (field === PasswordField2) {
      setPasswordView({ ...passwordView, password2: !passwordView.password2 })
    }
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    inputRef.current && inputRef.current.click()
  }

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader();
      if(file.size > 10000000){
        alert("File is too big")
        return
      }
      reader.onload = () => {
        // handleOnChange({target:{ files: [reader.result] }})
        setimage(reader.result)
        console.log(reader.result)
        handleOnChange({ target: { name: "image", value: file } })
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleInputChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    console.log(file)
    if (file) {
      setfile(file);
      handleImageChange(file);
    }
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer ? e.dataTransfer.files[0] : null;
    if (file) {
      setfile(file);
      handleImageChange(file);
    }
  }

  const isValidEmail = (mail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    function validateForm(formData) {
      let errors = [];
    
      // Check if image is provided
      if (!formData.image) {
        alert("Please upload an image.");
        errors.push("Please upload an image.");
      }
    
      // Check if business name is provided and not empty or just backticks
      if (!formData.businessName || formData.businessName.trim() === '`') {
        alert("Please enter a valid business name.");
        errors.push("Please enter a valid business name.");
      }
    
      // Check if HouseNumber, Street, City, and State are provided and not empty
      if (!formData.HouseNumber || !formData.Street || !formData.City || !formData.State) {
        alert("Please enter your address details.");
        errors.push("Please enter your address details.");
      }
    
      // Check if contact name is provided and not empty
      if (!formData.ContactName) {
        alert("Please enter a contact name.");
        errors.push("Please enter a contact name.");
      }
    
      // Check if contact phone number is provided and not empty
      if (!formData.ContactPhoneNumber) {
        alert("Please enter a contact phone number.");
        errors.push("Please enter a contact phone number.");
      }
    
      // Check if contact email address is provided and is in a valid format
      if (!formData.ContactEmailAddress || !isValidEmail(formData.ContactEmailAddress)) {
        alert("Please enter a valid contact email address.");
        errors.push("Please enter a valid contact email address.");
      }
    
      // Check if password is provided and meets minimum requirements
      if (!formData.Password || formData.Password.length < 8) {
        alert("Please enter a password with at least 8 characters.");
        errors.push("Please enter a password with at least 8 characters.");
      }
    
      // Check if confirm password matches password
      if (formData.Password !== formData.ConfirmPassword) {
        alert("Passwords do not match.");
        errors.push("Passwords do not match.");
      }
    
      // Check if business email address is provided and is in a valid format
      if (!formData.BusinessEmailAddress || !isValidEmail(formData.BusinessEmailAddress)) {
        alert("Please enter a valid business email address.");
        errors.push("Please enter a valid business email address.");
      }
    
      // Check if business phone number is provided and not empty
      if (!formData.BusinessPhoneNumber) {
        alert("Please enter a business phone number.");
        errors.push("Please enter a business phone number.");
      }
    
      // Check if business account number is provided and not empty
      if (!formData.BusinessAccountNo) {
        alert("Please enter a business account number.");
        errors.push("Please enter a business account number.");
      }

      // Check if business category is provided and not empty
      if (!formData.BusinessCategory ) {
        alert("Please select a business category.");
        errors.push("Please select a business category.");
      }

      // Check if state is provided and not empty
      if (!formData.State ) {
        alert("Please select a state.");
        errors.push("Please select a state.");
      }

    
      return errors;
    }
    const error = validateForm(inputs)
    console.log(error)
    if (error.length > 0) {
      return
    }
    // console.log(inputs)
    const FilledFormed = document.querySelector(".filledFormed")
    // console.log(form.current)
    const formData = new FormData(FilledFormed)
    formData.append("image", inputs.image)
    formData.append("state", inputs.State)
    formData.append("businessCategory", inputs.BusinessCategory)
    // console.log(formData)
    setLoading(true)
    setTimeout(() => {

      console.log("simulating post")
      setLoading(false)
      setOpen(true)
    }, 3000)


    return response
  }
  const handleClose = () => {
    setOpen(false)
    navigate("/")

  }
  const handleOnChange = (e) => {
    // console.log(e)
    const { name, value } = e.target
    setInputs(values => ({ ...values, [name]: value }))
    // console.log(inputs)
  }
  return (
    <div className=' py-[72px] bg-[#F5F6F8]  px-[120px]'>
      <Dialog open={open}  onOpenChange={setOpen}>
      <DialogContent  className='w-[442px] flex flex-col items-center justify-center text-center px-10 py-10' >
        <div className='flex items-center justify-center bg-[rgba(255,153,0,0.1)] rounded-[6px] h-16 w-16 '>
          <img src="/Icon-pending.svg" alt="Pending Icon" />
        </div>
        <span  className='text-2xl font-medium text-[#FF9900] leading-8 '>Pending</span>
        <span  className='text-sm my-family-poppins  leading-[18px] text-[#1A1619] mt-3'>Your registration is awaiting approval from our partnership team</span>
        <Button onClick={handleClose} className='w-full text-sm font-medium leading-4 rounded py-4 mt-6 h-fit bg-[#039BF0] '>Done</Button>
      </DialogContent>
    </Dialog>
      
      <div className='flex justify-between items-center'>
        <div>
          <img src="/LOGO.svg" alt="express logo" />
        </div>
        <div className='flex gap-2 items-center '>
          <span className=' text-sm text-[#606060] leading-4'>Already have an account?</span>
          <Button onClick={() => navigate("/")} variant="outline" className="px-4 py-2 border text-sm font-bold leading-4 border-[#039BF0] rounded text-[#039BF0]" >
            Sign in
          </Button>
        </div>
      </div>
      <div className='w-full  mt-[92px]'>
        <div className='max-w-[522px] bg-white rounded-[8px] mx-auto p-10' style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.06)' }}>
          <div>
            <h1 className='text-2xl leading-7 text-[#039BF0] font-medium'>Welcome to Xpress Rewards</h1>
            <span className=' text-sm leading-[14px] text-[#606060]'>Complete the form below to get started</span>
          </div>
          <Separator className=" mt-4 mb-6 h-[2px] bg-[#F5F6F8]" />
          <div>

            <span ref={section1Texta} className={` block VisibleSectionA text-sm overflow-hidden  leading-4 mb-2 text-[#039BF0] font-medium`}>Business Information</span>
            <span ref={section1Textb} className={`block inVisibleSectionA text-sm  overflow-hidden leading-4 mb-2 text-[#039BF0] font-medium`}>Business Address</span>
            <form ref={form} onSubmit={handleSubmit} className=' filledFormed flex flex-col ' action="">
              <div  className=''>
                {/* first row */}
                {/* visible in step 1 */}
                <div ref={section1a} className='VisibleSectionA mb-4 overflow-hidden'>
                  <label htmlFor="businessName" className=''>
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Business Name</span>
                    <input 
                    type="text" 
                    required
                    name="businessName"
                    onChange={handleOnChange}
                    value={inputs.businessName || ''}
                    className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                    />
                  </label>
                </div>
                {/* visible in step 2 */}
                <div ref={section1b} className='  inVisibleSectionA mb-4 flex gap-4 row overflow-hidden'>

                  <label  htmlFor="HouseNumber" className='basis-1/3 '>
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>House Number</span>
                    <input 
                    type="text" 
                    required
                    name="HouseNumber"
                    onChange={handleOnChange}
                    value={inputs.HouseNumber || ''}
                    className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                    />
                  </label>
                  <label htmlFor="Street" className='basis-2/3'>
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Street</span>
                    <input 
                    type="text" 
                    required
                    name="Street"
                    onChange={handleOnChange}
                    value={inputs.Street || ''}
                    className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                    />
                  </label>
                </div>
                
                
              </div>

              {/* second row */}
              <div>
                {/* visible in step 1 */}
                <div ref={section2a} className='VisibleSectionA mb-4 overflow-hidden'>
                  <label htmlFor="BusinessEmailAddress">
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Business Email Address</span>
                    <input 
                    type="email" 
                    required
                    name="BusinessEmailAddress"
                    onChange={handleOnChange}
                    value={inputs.BusinessEmailAddress || ''}
                    className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                    />
                  </label>
                </div>
                {/* visible in step 2 */}

                <div ref={section2b} className='  inVisibleSectionA flex mb-4 gap-4 row overflow-hidden'>
                  <label  htmlFor="City" className='basis-1/2'>
                      <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>City</span>
                      <input 
                      type="text" 
                      required
                      name="City"
                      onChange={handleOnChange}
                      value={inputs.City || ''}
                      className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                      />
                  </label>
                  <label htmlFor="State" className='basis-1/2'>
                    <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>State</span>
                    <Select required onValueChange={e => handleOnChange({target:{ name:'State', value:e }})} defaultValue={inputs.State || ''}>
                        <SelectTrigger className='h-12 px-3 py-[15px] outline-none focus:outline-none focus:ring-0 border border-[#CCCCCC] rounded  mt-2'>
                          <SelectValue   placeholder="" />
                        </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            <SelectItem value="AZ">Arizona</SelectItem>
                            <SelectItem value="AR">Arkansas</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="CO">Colorado</SelectItem>
                            <SelectItem value="CT">Connecticut</SelectItem>
                            <SelectItem value="DE">Delaware</SelectItem>
                            <SelectItem value="DC">District Of Columbia</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            <SelectItem value="GA">Georgia</SelectItem>
                            <SelectItem value="HI">Hawaii</SelectItem>
                            <SelectItem value="ID">Idaho</SelectItem>
                            <SelectItem value="IL">Illinois</SelectItem>
                            <SelectItem value="IN">Indiana</SelectItem>
                            <SelectItem value="IA">Iowa</SelectItem>
                            <SelectItem value="KS">Kansas</SelectItem>
                            <SelectItem value="KY">Kentucky</SelectItem>
                            <SelectItem value="LA">Louisiana</SelectItem>
                            <SelectItem value="ME">Maine</SelectItem>
                            <SelectItem value="MD">Maryland</SelectItem>
                            <SelectItem value="MA">Massachusetts</SelectItem>
                            <SelectItem value="MI">Michigan</SelectItem>
                            <SelectItem value="MN">Minnesota</SelectItem>
                            <SelectItem value="MS">Mississippi</SelectItem>
                            <SelectItem value="MO">Missouri</SelectItem>
                            <SelectItem value="MT">Montana</SelectItem>
                            <SelectItem value="NE">Nebraska</SelectItem>
                            <SelectItem value="NV">Nevada</SelectItem>
                            <SelectItem value="NH">New Hampshire</SelectItem>
                            <SelectItem value="NJ">New Jersey</SelectItem>
                            <SelectItem value="NM">New Mexico</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="NC">North Carolina</SelectItem>
                            <SelectItem value="ND">North Dakota</SelectItem>
                            <SelectItem value="OH">Ohio</SelectItem>
                            <SelectItem value="OK">Oklahoma</SelectItem>
                            <SelectItem value="OR">Oregon</SelectItem>
                            <SelectItem value="PA">Pennsylvania</SelectItem>
                            <SelectItem value="RI">Rhode Island</SelectItem>
                            <SelectItem value="SC">South Carolina</SelectItem>
                            <SelectItem value="SD">South Dakota</SelectItem>
                            <SelectItem value="TN">Tennessee</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="UT">Utah</SelectItem>
                            <SelectItem value="VT">Vermont</SelectItem>
                            <SelectItem value="VA">Virginia</SelectItem>
                            <SelectItem value="WA">Washington</SelectItem>
                            <SelectItem value="WV">West Virginia</SelectItem>
                            <SelectItem value="WI">Wisconsin</SelectItem>
                            <SelectItem value="WY">Wyoming</SelectItem>
                        </SelectContent>
                    </Select>
                </label>
                </div>
              </div>
              {/* third row */}
              <div>
                {/* visible in step 1 */}
                <div ref={section3a} className='VisibleSectionA flex flex-col  overflow-hidden'>
                  <div className='mb-4'>
                    <label htmlFor="BusinessPhoneNumber">
                      <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Business Phone Number</span>
                      <input 
                      type="text" 
                      required
                      name="BusinessPhoneNumber"
                      onChange={handleOnChange}
                      value={inputs.BusinessPhoneNumber || ''}
                      className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                      />
                    </label>
                  </div>
              
                  <div className='mb-4'>
                    <label htmlFor="BusinessCategory">
                      <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Business Category</span>
                      <Select required onValueChange={e => handleOnChange({target:{ name:'BusinessCategory', value:e }})} defaultValue={inputs.BusinessCategory || ''}>
                          <SelectTrigger className='h-12 px-3 py-[15px] outline-none focus:outline-none focus:ring-0 border border-[#CCCCCC] rounded  mt-2'>
                            <SelectValue   placeholder="" />
                          </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="retail@example.com">Retail</SelectItem>
                            <SelectItem value="technology@example.com">Technology</SelectItem>
                            <SelectItem value="finance@example.com">Finance</SelectItem>
                            <SelectItem value="healthcare@example.com">Healthcare</SelectItem>
                            <SelectItem value="hospitality@example.com">Hospitality and Tourism</SelectItem>
                            <SelectItem value="manufacturing@example.com">Manufacturing</SelectItem>
                            <SelectItem value="education@example.com">Education</SelectItem>
                            <SelectItem value="consulting@example.com">Consulting</SelectItem>
                            <SelectItem value="transportation@example.com">Transportation and Logistics</SelectItem>
                            <SelectItem value="real-estate@example.com">Real Estate</SelectItem>
                          </SelectContent>
                      </Select>
                    </label>
                  </div>
                  <div className='mb-4'>
                    <label htmlFor="BusinessAccountNo">
                      <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Account No</span>
                      <input 
                      required
                      type="text" 
                      name="BusinessAccountNo"
                      onChange={handleOnChange}
                      value={inputs.BusinessAccountNo || ''}
                      className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                      />
                    </label>
                  </div>
                  <div className='mb-4'>
                    <label htmlFor="Image">
                      <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Image (Logo)</span>
                      <div 
                        onDrop={handleOnDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className='w-full py-6 flex flex-col items-center myRoundedBorder mt-2 '
                      >
                        <input required type="file" ref={inputRef} className='hidden' accept='.jpg, .png, .jpeg' onChange={handleInputChange}  />
                        {image ? (
                          <div className='flex items-center flex-col'>
                            <ImageIcon className='w-10 h-10' /> 
                            <span>{file.name}</span>
                          </div>
                        ) : (
                          <div className='flex items-center flex-col'>
                            <img src="/upload.svg" width={40} alt="upload icon" />
                            <span className='mt-3 text-xs leading-4 text-[#1A141F] '>Drag here or click the button below to upload </span>
                          </div>)}
                         <Button onClick={handleOnClick} className='px-3 mt-[22px] h-fit leading-5 flex gap-2 items-center  text-sm  bg-[#039BF0] py-1 rounded'>
                          <img width={16} src="/paperclip.svg" alt="choose file button" />
                          <span>{ image ? 'Change File' : 'Choose File'}</span>
                        </Button>
                        <span className='mt-5 text-sm leading-5 text-[#4B3A5A]'>Maximum upload size: 10MB (.jpg)</span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* visible in step 2 */}
                <div  ref={section3b} className='inVisibleSectionA flex flex-col  overflow-hidden'>
                    <span className={` block VisibleSectionA text-sm ${step === 1 ? "outsideView" : "inView" } leading-4 mt-6 mb-2 text-[#039BF0] font-medium`}>Contact Person Information</span>

                    <div className='mb-4'>
                      <label htmlFor="ContactName">
                       
                        <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Contact Name</span>
                        <input 
                        type="text" 
                        required
                        name="ContactName"
                        onChange={handleOnChange}
                        value={inputs.ContactName || ''}
                        className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                        />
                      </label>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor="ContactPhoneNumber">
                        <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Contact Phone Number</span>
                        <input 
                        type="text" 
                        required
                        name="ContactPhoneNumber"
                        onChange={handleOnChange}
                        value={inputs.ContactPhoneNumber || ''}
                        className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                        />
                      </label>
                    </div>
                    <div >
                      <div className=''>
                        
                        <label  htmlFor="ContactEmailAddress">
                          <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Contact Email Address</span>
                          <input 
                          type="email" 
                          required
                          name="ContactEmailAddress"
                          onChange={handleOnChange}
                          value={inputs.ContactEmailAddress || ''}
                          className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded  mt-2' 
                          />
                        </label>
                      </div>
                      <span className={` block VisibleSectionA text-sm  leading-4 mt-6 mb-2 text-[#039BF0] font-medium`}>Password</span>
                      <div className='mb-4'>
                        <label htmlFor="Password ">
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
                      <label htmlFor="ConfirmPassword">
                        <span className=' text-sm leading-4 text-[#1A1619] mb-2 font-medium'>Confirm Password</span>
                        <div className='relative  mt-2'>
                          <input 
                          type="password" 
                          ref={PasswordField2}
                          required
                          name="ConfirmPassword"
                          onChange={handleOnChange}
                          value={inputs.ConfirmPassword || ''}
                          className='w-full px-3 py-[15px] text-sm leading-[0] border border-[#CCCCCC] rounded' 
                          />
                          <button
                              onClick={(e) => {handleShowPassword(e, PasswordField2)}}
                            className='absolute right-3 top-1/2 -translate-y-1/2'>
                              { passwordView.password2 ? <EyeOffIcon/> :  <EyeIcon /> }
                          </button>
                        </div>
                      </label>

                    </div>
                </div>
              </div>
              

              <div className='mt-6 flex items-center'>
                <div>
                  <Button style={{boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)'}} ref={Button1} onClick={handleSectionChange} className='block overflow-hidden visibleButtonA py-5 mr-4 text-sm font-medium bg-[#039BF0] h-fit px-[76px] leading-4'>Next</Button>
                  <Button style={{boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)'}} ref={Button2}  type="submit" className='block overflow-hidden invisibleButtonA py-5 mr-4 text-sm font-medium bg-[#039BF0] h-fit px-[76px] leading-4'>{ loading ? "Loading..." : "Submit"}</Button>
                </div>
                <span className='text-sm font-medium leading-4 text-[#808080]'>Step {step} of 2</span>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
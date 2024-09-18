import React, { useState } from 'react';



function Contact() {

    // const [ state, setState ] = useState();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [feedback, setFeedBack] = useState('');

    // handle submit

    const handleSubmit = async (event) => {
        event.preventDefault();

        // combine all the states into one object to send to the api
        const formData = {firstName, lastName, email, phone, gender, feedback }

        try {
            const response = await fetch('/api/signup', formData);
            alert('Form submitted successfully:' + response.data.message);
            console.log(formData);
        } catch (error) {
            console.error('Error submitting form');
            alert('Failed to submit form');
        }
    };
   
  return (
    <div className='h-auto p-[80px] from-neutral-600 bg-blue-900 text-lg sm:bg-black md:bg-yellow-400 md:px-[250px] lg:bg-teal-500 lg:px-[300px] xl:bg-fuchsia-700 xl:px-[400px]'>
        <div className='border p-[20px] rounded-xl'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-[10px]'>
                    <div className=''>
                        <label className='block text-white'>First Name</label>
                        <input 
                            type='name' 
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            placeholder='first name' 
                            className='p-2 rounded-md w-full'
                        />
                    </div>

                    <div className=''>
                        <label className='block text-white'>Last Name</label>
                        <input 
                            type='name' 
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            placeholder='last name' 
                            className='p-2 rounded-md w-full'
                        />
                    </div>

                    <div className=''>
                        <label className='block text-white'>Email</label>
                        <input 
                            type='email' 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='email' 
                            className='p-2 rounded-md w-full'
                        />
                    </div>

                    <div className=''>
                        <label className='block text-white'>Phone Number</label>
                        <input 
                            type='tel' 
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder='Phone number' 
                            className='p-2 rounded-md w-full'
                        />
                    </div>

                    <div className=''>
                        <label className='block  text-white'>Gender</label>
                        <select 
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            className='p-2 rounded-md w-full'
                        >
                            <option value=''>select gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>

                    <div className=''>
                        <label className='block text-white'>Feedback</label>
                        <textarea  
                            type='text' 
                            value={feedback}
                            onChange={(event) => setFeedBack(event.target.value)}
                            placeholder='give your feedback here' 
                            className='p-2 rounded-md w-full'  
                        />
                    </div>

                    <div className='flex justify-center items-center'>
                        <button
                            type='submit'
                            className='p-2 rounded-md  bg-black text-white sm:bg-white sm:text-black'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>


        
    </div>
  )
}

export default Contact
import React, {useState} from 'react';
import illust from '../assets/images/illust.svg';
import logo from '../assets/images/logo.png';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit (e) {
       e.preventDefault();
       
       const defemail = "admin@gmail.com";
       const defpassword = "admin";

       if(email === defemail && password === defpassword) {
       alert(`Login Successfully!`);
       window.location.reload();
       }
       else {
       alert(`Invalid Credentials!`);
       }
}
    return (
    <div className='container text-center mt-3'>
         <div className='row bottomMargin'>
          
            <div className='col-sm-6 mt-5 illust-mobile'>
                <img src={illust} alt='illust' className='illustrator' width={500} height={500}/>
            </div>

            <div className='col-sm-6 mt-5'>
                <img src={logo} alt='logo' className='logo' width={200} />
                <div className='header text-decoration-underline'>
                    <h4>Login</h4>
                </div>
                    <div>
                    <form className='w-100' onSubmit={handleSubmit}>
                        <input type='email' className='border border-secondary mt-5 p-2 mb-4 rounded' placeholder='Enter your Username' onChange={(e) => setEmail(e.target.value)} required/>
                        <input type='password' className='border border-secondary p-2 rounded mt-3' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required/>
                        <button type='submit' className='btn text-white mt-4' style={{backgroundColor: '#FF9900'}}>Login</button> 
                    </form>
                    <div className='mt-4'>
                    <span className='mt-3'>Don't have an account? <a href='#Signup' className='text-decoration-none'>Sign Up</a></span>
                    <span className='mt-3 ps-5'><a href='#Reset' className='text-decoration-none'>Forgot Password?</a></span>
                    </div>
                    </div>
            </div>

            </div>

            <div className="row bg-black text-white">
        <p>
            default email: <span className='text-primary'>admin@gmail.com</span> and password: <span className='text-primary'>admin</span> <br/>
            Designed By <a href="https://t.me/uixnature">Uix Nature</a> &
            Developed By <a href="https://github.com/Reaclate">Reaclate</a>
        </p>
        </div>
        
        </div>
    );
}
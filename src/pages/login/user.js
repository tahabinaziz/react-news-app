
import logo from '../../assests/images/logos/innoscripta-gmbh.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, Login } from '../../utiles/constant';
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import LoadingSpinner from '../../components/LoaderComponent';


export default function LoginUser() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msg, setMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();
    
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        e.preventDefault();
        const user = { email, password, post: 'student' };

        setIsLoading(true);
        axios.post(`${BASE_URL}/${Login}`, user).then(
            (response) => {
                console.log(response.data)
                var decode = jwt_decode(response.data);
                // set the state of the user
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        id:decode.primarysid,
                        token: response.data,
                        email: decode.unique_name,
                        role: decode.role
                    })
                );
                setUser(response.data);
                setIsLoading(false)
                // store the user in localStorage
            },
            (error) => {
                console.log(error,'error');
                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 3000)
                setIsLoading(false)
            }
        );
    }

    useEffect(() => {
        if (user) {
            return navigate("/NewsAPI");
        }
    }, [user])
const Register=()=>{
    console.log('Forget')
    navigate("/register")



}
    return (
        <div className={''}>
            <header className="w-full h-16 bg-primary text-white flex justify-center items-center">
                <h1 className='font-medium text-2xl font-[serif]'>Task-Home Challenge FullStack</h1>
            </header>
            <div className='bg-secondary py-16 h-screen md:py-56 lg:py-24 xl:py-24'>
                <div className="text-center w-full justify-center items-center text-gray-600 mb-4 -mt-16 ">
                    <img className='inline-block' src={logo} alt="ambridge-logo" width={250} height={100} />
                </div>
                <div className=" xs: max-w-xs  md:max-w-[700px] lg:max-w-lg xl:max-w-xl mx-auto bg-primary shadow-xl rounded">
                    <div className="text-center text-white py-4 text-xl">Login</div>
                    <div className="bg-gray-200 pt-8 pb-16 ">
                        <form>
                            <div className="w-4/5 mx-auto">
                                <div className='-mt-4 mb-4 text-center'>
                                    {msg && <span className='text-primary'>* Wrong email or password</span>}
                                </div>
                                <div className="flex items-center bg-white rounded shadow-md mb-4">

                                    <span className="px-3">
                                        <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" /></svg>
                                    </span>
                                    <input className="w-full h-12 focus:outline-none border-white"
                                        type="email"
                                        name="email"
                                        value={email || ''}
                                        placeholder="Enter email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center bg-white rounded shadow-md mb-8">
                                    <span className="px-3">
                                        <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" /></svg>
                                    </span>
                                    <input className="w-full h-12 focus:outline-none border-white"
                                        type="password"
                                        name="password"
                                        value={password || ''}
                                        placeholder="Enter password"
                                        autoComplete="on"
                                        onChange={(e) => setPassword(e.target.value)} />
                             
                                </div>
                                
                                <p className='text-right -mt-4 hover:text-primary cursor-pointer' onClick={Register}>Register</p>   
                                <button onClick={onSubmit} disabled={isLoading} className="bg-primary hover:bg-black block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2">Sign in</button>
                                {isLoading && <LoadingSpinner />}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
          
        </div>
    )
}

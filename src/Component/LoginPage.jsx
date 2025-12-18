import {React,  useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import { Baseurl } from './url/Url';


const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [logindata, setLoginData] = useState({
        email: "",
        password: ""
    });
    const handLogin = (e) => {
        setLoginData({
            ...logindata,
            [e.target.name]: e.target.value
        });
    }
        
    // const LoginSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const res = await axios.post(`${Baseurl}/api/login`, logindata);
    //         console.log(res.data)
    //         toast.success("Login succesfull");
    //         navigate("/sucess")
    //         localStorage.setItem("user", JSON.stringify(res.data))

    //     } catch (err) {
    //         console.error(err.response.data);
    //         toast.error("Rong Details!");
    //     }

    // }
        const LoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(`${Baseurl}/api/api/login`, logindata);
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            toast.success("Login successful");
            navigate("/sucess");
        } catch (err) {
            console.error(err.response?.data);
            toast.error("Wrong Details!");
        }
    };

         
    return (
        <>

            <div className="Container d-flex align-item-center justify-content-center mt-5  " style={{ height: "100%" }} >
                <form onSubmit={LoginSubmit} className="flex-column shadow rounded p-4 " style={{ width: "335px" }}>
                    <h3 className='my-2  text-center fw-semibold' >  Login </h3>

                    <div className='mb-4'>
                        <label htmlFor=""> Emai</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Enter Email'
                            className='form-control'
                            onChange={handLogin} />

                    </div>

                    <div className='mb-4'>
                        <label htmlFor=""> Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder=' Enter Password'
                            className='form-control '
                            onChange={handLogin} />
                    </div>
                    {loading && <p>loading..</p>}
                    <button className='btn btn-primary w-100'>Submit</button>

                </form>
            </div>
        </>
    )
}

export default LoginPage;

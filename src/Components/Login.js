import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Service/userService';
import useAuth from './context/useAuth';

const Login = () => {
    const { setAuth } = useAuth();
    const [userCredential, setUserCredential] = useState({
        username: '',
        password: '',
    })
    let navigate = useNavigate()
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredential((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    const { username, password } = userCredential

    const onLoginClick = async () => {
        const response = await userLogin(userCredential);
        if (response.status === 200) {
            const user = await response.json()
            setAuth({user})
            if (user.roleId === 2201) {
                navigate('/admin')    
            }else{
                navigate('/')
            }
            
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row '>
                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Login</h5>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name='username'
                                value={username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                name='password'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary" onClick={()=> onLoginClick()}>
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
import { useEffect, useState } from 'react';
import './login.css';

export const LoginForm = () => {

    const [formObj, setFormObj] = useState({
        username: '',
        phone: '',
        password: ''
    });

    const [arr, setArr] = useState([1, 2, 8]);

    const handleInputChanges = (e) => {
        setFormObj((prevFormObj) => ({
            ...prevFormObj, [e.target.name]: e.target.value
        })
        );
    }

    const updateArrOnce = () => {
        setArr((prevArr) => [...prevArr, 3]);
    }

    useEffect(() => {
        // const id = setInterval(() => {
        updateArrOnce(); // 👈 add 3 every second
        // }, 1000);

        // ✅ cleanup: remove interval when component unmounts
        // return () => clearInterval(id);
    }, [/*formObj.username*/]); // empty dependency = only set up once


    return (
        <>
            <div className='app-div'>
                <h3>UserName</h3>
                <input className="app-input"
                    value={formObj.username}
                    onChange={handleInputChanges}
                    placeholder='Jane Doe'
                    name='username'
                />
                <h3>Phone Number</h3>
                <input className="app-input"
                    value={formObj.phone}
                    onChange={handleInputChanges}
                    placeholder='+9112356789'
                    name='phone'
                />
                <h3>Password</h3>
                <input className="app-input"
                    type='password'
                    value={formObj.password}
                    onChange={handleInputChanges}
                    placeholder='password'
                    name='password'
                />
                <pre>{JSON.stringify(formObj)}</pre>
                <pre>{arr}</pre>

            </div>

        </>

    );

}
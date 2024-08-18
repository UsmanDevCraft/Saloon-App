import { Title, TitleSm } from '@/components/common/Title';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {

    const [ data, setData] = useState({name: "", email: "", password: ""});
    const { name, email, password} = data;
    const navigate = useRouter();

    const onSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/loginuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const json = await response.json();

            if(json.error){
                alert("Incorrect credentials, please try again correctly.")
            } else {
                localStorage.setItem("token", json.authToken);
                navigate.push("/")
                alert("Account Logged In Successfully!");
            }

        } catch (error) {
            console.log(error.message)
        }
    };

    const onChange = (e)=>{
        // console.log(e.target.value);
        setData({...data, [e.target.name]: e.target.value})
    };

  return (
    <section className='contact bg-top'>
    <div className='container'>
        <div className='heading-title'>
            <TitleSm title='Login' /> <br />
            <br />
            <Title title="Let's get started!" className='title-bg' />


            <form onSubmit={onSubmit}>
            {/* <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder='Your name here' onChange={onChange}/>
            </div> */}
            <div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input style={{border: "2px solid white", borderRadius: "10px", marginLeft: "2rem", padding: "0.7rem 2rem"}} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"placeholder='Your email here' onChange={onChange}/>
                </div>
                <div className="mb-3" style={{marginTop: "2rem"}}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input style={{border: "2px solid white", borderRadius: "10px", marginLeft: "4rem", padding: "0.7rem 2rem"}} type="password" className="form-control" id="password" name='password' aria-describedby="emailHelp"placeholder='Your password here' onChange={onChange}/>
                </div>
            </div>
            <button type="submit" className="button-primary" style={{marginTop: "3rem"}}>Submit</button>
        </form>
        </div>
    </div>
    </section>
  )
}

export default Login

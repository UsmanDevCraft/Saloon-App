import { Title, TitleSm } from '@/components/common/Title';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Signup = () => {

    const [ data, setData] = useState({name: "", email: "", password: ""});
    const { name, email, password} = data;
    const navigate = useRouter();

    const onSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("https://backend-saloon.vercel.app/api/auth/createuser", {
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
                alert("Account already exists, try another please.")
            } else {
                localStorage.setItem("token", json.authToken);
                navigate.push("/login")
                alert("Account Signed In Successfully, Login to move further.");
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
            <TitleSm title='Signup' /> <br />
            <br />
            <Title title="Let's get started!" className='title-bg' />


            <form onSubmit={onSubmit}>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input style={{border: "2px solid white", borderRadius: "10px", marginLeft: "6rem", padding: "0.7rem 2rem"}} type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder='Your name here' onChange={onChange}/>
                </div>
                <div className="mb-3" style={{marginTop: "1.5rem"}}>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input style={{border: "2px solid white", borderRadius: "10px", marginLeft: "2rem", padding: "0.7rem 2rem"}} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"placeholder='Your email here' onChange={onChange}/>
                </div>
                <div className="mb-3" style={{marginTop: "1.5rem"}}>
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

export default Signup

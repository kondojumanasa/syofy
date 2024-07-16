import React,{useState} from 'react';

import Login from '../login/index';
import { useNavigate } from 'react-router-dom';
import {SignUpContainer,Container,Title,Box,SmallTitle,Heading,Btn,Input,Span,Form , ErrorMessage} from './styledComponents';


function SignUpForm(){

    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_lastname: 'chary',
        user_email: '',
        user_password: '',
        user_phone: '',
        user_city: 'Hyderabad',
        user_zipcode: '500072'
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [errors, setErrors] = useState({
        user_firstname: '',
        user_email: '',
        user_password: '',
        user_phone: ''
    });





    const handleBlur = (e) => {
        const { name, value } = e.target;
        let errorMessage = '';

        switch (name) {
            case 'user_firstname':
                errorMessage = value.trim().length === 0 ? 'Full name is required' : '';
                break;
            case 'user_email':
                errorMessage = validateEmail(value) ? '' : 'Invalid email address';
                break;
            case 'user_password':
                errorMessage = validatePassword(value)
                    ? ''
                    : 'Password should contain at least one uppercase letter, one number, and be at least 8 characters long';
                break;
            case 'user_phone':
                errorMessage = validatePhone(value) ? '' : 'Invalid phone number';
                break;
            default:
                break;
        }

        setErrors((prevState) => ({
            ...prevState,
            [name]: errorMessage
        }));
    };








    const handleSubmit = async (e) => {
        e.preventDefault();



        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        const phoneRegex = /^\d{10}$/;

        const formIsValid =
            !errors.user_firstname &&
            emailRegex.test(formData.user_email) &&
            passwordRegex.test(formData.user_password) &&
            phoneRegex.test(formData.user_phone);

        if (!formIsValid) {
            alert('Please correct the errors in the form before submitting.');
            return;
        }



        try {
            const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful:', data);
                alert('Registration successful!');
                setIsLogin(true);
                // Optionally handle success, e.g., redirect or show a success message
            } else {
                if (data.message && data.message.includes('User already exists')) {
                    alert('User already exists');
                } else {
                    alert('Registration failed');
                }
            }
        } catch (error) {
            console.error('Error registering user:', error.message);
            // Handle error, e.g., show an error message to the user
        }
    };





    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };

    const validatePhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };
   

    return (

           
        <>


        { isLogin ? (<Login />) : 
            (
                <SignUpContainer >
                <div>
                    <Heading > Sign up</Heading>
                    <SmallTitle >Already have an account? <Span>Sign in</Span></SmallTitle>
                </div>
    
                <Form onSubmit={handleSubmit}>
    
                    <Container >
                    <Title >
                        Full name *
                    </Title>
                    <Input  type="text" name="user_firstname" onBlur={handleBlur} value={formData.user_firstname} onChange={handleChange} required/>
                    {errors.user_firstname && <ErrorMessage>{errors.user_firstname}</ErrorMessage>}
                    </Container>
    
                    <Container >
                        <Title>
                            Email address *
                        </Title>
                        
                        <Input type="email" name="user_email" onBlur={handleBlur} value={formData.user_email} onChange={handleChange} required/>
                        {errors.user_email && <ErrorMessage>{errors.user_email}</ErrorMessage>}
                    </Container>
                    <Container >
                        <Title>
                            Password *
                        </Title>
                        <Input type="password" name="user_password" onBlur={handleBlur} value={formData.user_password} onChange={handleChange} required/>
                      
                        {errors.user_password && <ErrorMessage>{errors.user_password}</ErrorMessage>}

                    </Container>
                    <Container >
                        <Title>
                            Phone *
                        </Title>
                        <Input type="tel" name="user_phone" onBlur={handleBlur} value={formData.user_phone} onChange={handleChange} required/>
                        {errors.user_phone && <ErrorMessage>{errors.user_phone}</ErrorMessage>}
                    </Container>
    
                    <Box > 
                    <Input type='checkbox' />
                    <Title> I agree to the <Span style={{color:'blue'}}>Term of Service</Span> and <Span style={{color:'blue'}}>Privacy 
                    Policy</Span></Title>
                    </Box>
    
                    <Btn >Create your free account</Btn>
                </Form>
            </SignUpContainer>
            )
        }
        </>



      
       
    )
}

export default SignUpForm;
















































// import React, { useState } from 'react';

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         user_firstname: '',
//         user_lastname: 'ni',
//         user_email: '',
//         user_password: '',
//         user_phone: '',
//         user_city: 'Hyderabad',
//         user_zipcode: '500072'
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (!response.ok) {
//                 throw new Error('Registration failed');
//             }

//             const data = await response.json();
//             console.log('Registration successful:', data);
//             // Optionally handle success, e.g., redirect or show a success message
//         } catch (error) {
//             console.error('Error registering user:', error.message);
//             // Handle error, e.g., show an error message to the user
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 First Name:
//                 <input type="text" name="user_firstname" value={formData.user_firstname} onChange={handleChange} required />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" name="user_password" value={formData.user_password} onChange={handleChange} required />
//             </label>
//             <br />
//             <label>
//                 Phone:
//                 <input type="tel" name="user_phone" value={formData.user_phone} onChange={handleChange} required />
//             </label>
//             <br />
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default RegistrationForm;

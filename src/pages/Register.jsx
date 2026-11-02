import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {

 const navigate = useNavigate

 const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    const formSubmit = () => {
        alert('success!');
        reset();
        navigate('/Login');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <input type='text'
                    placeholder='Enter name'
                    autoFocus
                    {...register('name', {
                        required: 'Name is mandatory'
                    })}
                /><br />
                {errors.name && <p>{errors.name.message}</p>}

                <input type='number'
                    placeholder='Enter age'
                    {...register('age', {
                        required: 'age is mandatory',
                        min: {
                            value: 18,
                            message: 'age should be >= 18'
                        }
                    })}
                /><br />
                {errors.age && <p>{errors.age.message}</p>}

                <input type='email'
                    placeholder='Enter email'
                    {...register('email', {
                        required: 'email is mandatory',
                        pattern: {
                            value: /^[A-Za-z0-9]+@gamil\.com$/,
                            message: 'Mail should be a vaild gmail id'
                        }
                    })}
                /><br />
                {errors.email && <p>{errors.email.message}</p>}

                <input type='Password'
                    placeholder='Enter password'
                    {...register('password', {
                        required: 'Name is mandatory',
                        minLength: {
                            value: 8,
                            message: 'Password should be a least 8 chacters long'
                        }
                    })}
                /><br />
                {errors.password && <p>{errors.password.message}</p>}

                <button type='submit'>Signup</button>
            </form>
        </div>
    )
  } 

export default Register

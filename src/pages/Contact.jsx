import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    const formSubmit = () => {
        alert('successfully login!!')
        reset();
    }

    return (
        <section className='contact-sec'>
            <div>
                <div>
                    <h2>Contact Information</h2>
                </div>

                <div>
                    <p><i className="fa-brands fa-whatsapp"></i>Chat</p>
                    <p><i class="fa-solid fa-phone"></i>+91 8456235956</p>
                    <p>☏ 111 11 125</p>
                </div>

                <div>
                    <p>ShopKart Pvt. Ltd.<br />
                        Office No. 402, Business Square, <br />
                        Baner Road, Pune, Maharashtra 411045, India.<br />
                        Phone: +91 98765 43210<br />
                        Email: info@auctionvistas.com</p>
                </div>

                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.75965574005!2d73.85529461076874!3d18.449218582558142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb00109c8a5d%3A0xdcdbaea7c651f7cd!2sItvedant%20-%20Katraj!5e0!3m2!1sen!2sin!4v1792996250635!5m2!1sen!2sin"></iframe>
                </div>

                <div className='links-social'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-telegram"></i>
                </div>
            </div>

            <div>
                <div className="form-div1">
                    <h2 className="form-title">Contact Us</h2>
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className='mb-3'>
                            <input type="text" className='form-control'
                                placeholder='Enter Name'
                                autoFocus
                                {...register('name', {
                                    required: 'name is mandatory'
                                })}
                            />
                            {errors.name && <p className="error-message">{errors.name.message}</p>}
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control"
                                placeholder="Enter Email Address"
                                {...register('email', {
                                    required: 'email is mandatory',
                                    pattern: {
                                        value: /^[A-Za-z0-9]+@gmail\.com$/,
                                        message: 'please enter valid gmail address'
                                    }
                                })}
                            />
                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <input type="number" className="form-control"
                                placeholder="Enter Contact Number"
                                {...register('contact', {
                                    required: 'contact is mandatory',
                                    minLength: {
                                        value: '[6-9][0-9][9]',
                                        message: 'password must contain at least 8 characters'
                                    }
                                })}
                            />
                            {errors.password && <p className="error-message">{errors.password.message}</p>}
                        </div>

                        <div>
                            <select id="subject" className="form-select" defaultValue="" required>
                                <option value="" disabled>
                                    Select a subject
                                </option>
                                <option>Payment Issues</option>
                                <option>Shipping & Delivery</option>
                                <option>Returns & Refunds</option>
                                <option>Product Inquiry</option>
                                <option>Account Issues</option>
                                <option>Technical Support</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <input type="text" className='form-control'
                                placeholder='Enter Message'
                                autoFocus
                                {...register('mesaage', {
                                    required: 'message is mandatory',
                                    pattern: {
                                        value: 300
                                    }
                                })}
                            />
                            {errors.message && <p className="error-message">{errors.message.message}</p>}

                        </div>

                        <div className="button-group">
                            <button type="submit" className="btn btn-primary submit-btn"> submit </button>
                            <button type="button" className="btn btn-secondary clear-btn" onClick={() => reset()} >Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact

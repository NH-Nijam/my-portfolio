'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FiGithub } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import Swal from 'sweetalert2';
import Link from 'next/link';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [message, setMessage] = useState([]);
    const formHandler = (event) => {
        event.preventDefault();
        const form = event.target;

        emailjs.sendForm(
            'Nijam123@#',    
            'template_h116gpx',   
            form,
            'OUrXEEwqvgroFFY0I'    
        ).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Message sent successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            },
            (error) => {
                console.error(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            }
        );
    }

    return (
        <div className=' py-[100px] container'>
            <h1 data-aos="fade-down" className='text-3xl font-semibold text-center decoration-wavy underline tracking-[3px] '>Contact Me</h1>
            <div className='mt-20 flex lg:flex-row flex-col gap-10 justify-center items-center'>
                {/* Contact Info */}
                <div data-aos="fade-right" className='lg:w-2/5 w-full md:p-10 p-4 shadow-lg shadow-orange-600 rounded-b-xl'>
                    <div className='w-full md:h-[300px] rounded-lg'>
                        <Image src={'/img/apple-606761_1280.jpg'} width={500} height={500} alt='image not found' className='hover:scale-105 duration-500 rounded-lg w-full h-full' />
                    </div>
                    <div className='md:mt-10 mt-5'>
                        <h2 className='md:text-3xl text-2xl font-semibold'>MD Nijam Hossen</h2>
                        <h3 className='md:text-xl text-base font-medium'>Front-end Developer</h3>
                        <p className='md:mt-5 mt-2 text-justify opacity-80'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-2xl opacity-60'>CONNECT WITH ME</h2>
                        <div className='mt-10 flex 2xl:gap-10 md:gap-7 gap-4 justify-center lg:justify-between'>
                            <Link href='https://github.com/NH-Nijam' target='_blank'>
                                <div className='icon-style'><FiGithub className='icon' /></div>
                            </Link>
                            <Link href='https://www.facebook.com/profile.php?id=100009625237790' target='_blank'>
                                <div className='icon-style'><FaFacebookF className='icon' /></div>
                            </Link>
                            <Link href='https://www.linkedin.com/in/nijam-hossen-789081264/' target='_blank'>
                                <div className='icon-style'><FaLinkedinIn className='icon' /></div>
                            </Link>
                            <Link href='https://www.pinterest.com/login/' target='_blank'>
                                <div className='icon-style'><FaPinterestP className='icon' /></div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div data-aos="fade-left" className='w-full md:p-10 p-3 shadow-lg shadow-orange-600 rounded-b-xl'>
                    <form onSubmit={formHandler} className='flex flex-col gap-5'>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' required placeholder='Type Name' className='input-style' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="number">Number</label>
                                <input type="number" name='number' required placeholder='Number' className='input-style' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" required name='email' placeholder='Type email' className='input-style' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name='subject' required placeholder='Type Subject' className='input-style' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" required placeholder='Type message...' rows="6" className='input-style' />
                        </div>
                        <button type='submit' className='bg-orange-600 rounded-md p-3 text-xl font-semibold text-white'>Send Message</button>
                    </form>
                </div>
            </div>

            {/* Reusable styles */}
            <style jsx>{`
                .input-style {
                    border: 2px solid #a3a3a3;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    outline: none;
                    width: 100%;
                }
                .input-style:focus {
                    border-color: #16a34a;
                }
                .icon-style {
                    width: 50px;
                    height: 50px;
                    background: white;
                    box-shadow: 0 0 10px #ea580c;
                    border-radius: 9999px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.3s ease;
                }
                .icon-style:hover {
                    transform: scale(1.1);
                }
                .icon {
                    font-size: 1.75rem;
                }
            `}</style>
        </div>
    );
};

export default ContactPage;

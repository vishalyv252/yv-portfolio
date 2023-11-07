import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let errors = {
      name: '',
      email: '',
      message: ''
    };
    let formValid = true;

    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
      formValid = false;
    }

    if (!formData.email || !formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.email = 'Please enter a valid email address';
      formValid = false;
    }

    if (formData.message.trim() === '') {
      errors.message = 'Message is required';
      formValid = false;
    }

    setFormErrors(errors);
    return formValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const emailData = {
        ...formData,
        message: `User: ${formData.name}, Email: ${formData.email}\n\n${formData.message}`
      };

      emailjs.send('service_wta9i8n', 'template_vcfdii9', emailData, 'Jm-uT6DJQ9keo0MLl')
        .then((result) => {
          setSuccessMessage('Email successfully sent!');
          setFormData({ name: '', email: '', message: '' }); // Clear the form after successful submission
          // Further actions upon successful submission can be added here
        })
        .catch((error) => {
          console.error('There was an error sending the email:', error);
          // Handle errors here (e.g., display an error message to the user).
        });
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full bg-gray-800 p-8 rounded-lg'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email</p>
        </div>
        <input className='bg-gray-600 p-2 text-white rounded mb-4' type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
        {formErrors.name && <span className='text-red-500'>{formErrors.name}</span>}
        <input className='bg-gray-600 p-2 text-white rounded mb-4' type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
        {formErrors.email && <span className='text-red-500'>{formErrors.email}</span>}
        <textarea className='bg-gray-600 p-2 text-white rounded mb-4' name='message' rows='6' placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
        {formErrors.message && <span className='text-red-500'>{formErrors.message}</span>}
        {successMessage && (
          <div className='bg-green-500 text-white p-3 rounded mt-4 text-center'>
            {successMessage}
          </div>
        )}
        <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded bg-gray-700'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

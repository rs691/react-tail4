import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8760sm9', 'contact_form', form.current, {
        publicKey: 'cDb0tNEXvPJfa9x4O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">Name</label>
      <input type="text" id="user_name" name="user_name" />
      <label htmlFor="user_email">Email</label>
      <input type="email" id="user_email" name="user_email" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
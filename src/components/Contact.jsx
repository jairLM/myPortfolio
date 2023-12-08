import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k8vo50j', 'template_npwc8im', form.current, 'UsvdseKnW7xg203uJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   
    <>
    <section className='titleContact'>
        <h1 id='projects'>&#60;--Contact--&#62;</h1>
    </section>
     
    <form ref={form} onSubmit={sendEmail} className=' containerForm'>
    
    <div className='containerInfo'>

        <div className=" inputSm">
            <label for="contactName"  className="form-label"><p>Name</p></label>
            <input type="text" name="user_name" className="form-control m-2" id="contactName"></input>
        </div>
        <div className=" inputSm">
            <label for="contactEmail" className="form-label"><p>Email</p></label>
            <input type="email" name="user_email"  class="form-control m-2" id="contactEmail"></input>
        </div>
        <div className=" input">
            <label for="contactMessage" className="form-label"><p>Message</p></label>
            <textarea type="text" name="message" className="form-control" id="contactMessage"></textarea>
        </div>
        <button type="submit" value="Send" className="btn_send">Enviar</button>

    </div>
    <section className='containerImgSend'>
        <img className="imgSend" src="../myPortfolio/img/sent-messages.svg" alt="send" /> 
    </section>

    </form>
    
    
    
    
    </>



  );
};
export default ContactMe
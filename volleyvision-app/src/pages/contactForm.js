import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Container = styled.div`
    position: absolute;
    left: 650px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    width: 400px;
    height: 150px;
`

const Contact_Container = styled.div`
    position: absolute;
    left: 180px;
    top: 80px;
`

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zh52ga4', 'template_64b10uj', form.current, 'user_EueUzbC3FYLD7rvwFwzTP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <div>
    <SideBar/>
    <SearchBar/>
    <Container>
        Contact Us
    </Container>
    <Contact_Container>
    <form ref={form} onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
         </div>
    </form>
    </Contact_Container>

    </div>

  );
};

export default ContactUs
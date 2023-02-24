import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Contactaction from "../redux/action/Contact.action";

const PromiceApi = () => {

  const dispatch = useDispatch()
  const navigator = useNavigate()
  
  const Promice = fetch("https://randomuser.me/api/");
  
  Promice.then(response => response.json())
  .then(json => 
    console.log(json)
  )
  const OnSubmitData = (event) => {
    event.preventDefault()
    const obj = {
      id : new Date().getTime(),
      name : event.target.name.value,
      email : event.target.email.value,
      subject : event.target.subject.value,
      message : event.target.message.value,
    }
    
    console.log('obj',obj)
    dispatch({type : "ADDCONTACT" , payload : obj});

    navigator('/medicine')
  }

  return (
    <div>
        <section id="contact" className="contact">
                <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                    blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                    luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
                </div>
                <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto">
                    <form className="php-email-form" onSubmit={OnSubmitData}>
                        <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" placeholder="Your Email" />
                        </div>
                        </div>
                        <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                        </div>
                        <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
      )
};

export default PromiceApi;

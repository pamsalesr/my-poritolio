import React from 'react';
import emailjs from 'emailjs-com';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }
  
  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_hrsnbns', 'template_fnp1a1l', e.target, 'user_jzbDWZIAO1zgeAHW0ZBnm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  
  render() {
    return (
      <div>
        <form className="contact-form" onSubmit={ this.sendEmail }>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ContactForm;

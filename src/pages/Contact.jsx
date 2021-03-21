import React from 'react';
import ContactForm from '../components/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div>
        Contact
        <ul>
          <li>GitHub</li>
        </ul>
        <ContactForm />
      </div>
    );
  };
}

export default Contact;

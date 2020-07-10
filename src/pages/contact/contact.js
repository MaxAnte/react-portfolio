import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './contact.css';

class ContactPage extends React.Component {
    render() {
        return (
            <div className='contact'>
                <div className='container'>
                    <ContactForm />
                </div>
            </div>
        );
    }
}

export default ContactPage;

import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm.js'

const Contact = () => {
    
    return (
        <div className="contact flex h-full items-center">
            <PageTitle text={"CONTACT"}/>
            <ContactForm/>
            
        </div>
    )
}

export default Contact
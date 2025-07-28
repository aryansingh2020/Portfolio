import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm.js'

const Contact = () => {
    
    return (
        <div className="contact flex flex-col sm:flex-row items-center gap-[2dvh] sm:gap-0">
            <PageTitle text={"CONTACT"}/>
            <ContactForm/>
        </div>
    )
}

export default Contact

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ success: null, message: "Sending..." });

        // Prepare data for EmailJS
        const dataToSend = {
            ...formData,
            time: new Date().toLocaleString() // Add current date & time
        };

        // EmailJS
        emailjs
            .send(
                emailjs.send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    dataToSend,
                    process.env.REACT_APP_PUBLIC_KEY
                )
  
      )
      .then(
                    () => {
                        setStatus({ success: true, message: "Message sent successfully!" });
                        setFormData({ name: "", email: "", phone: "", message: "" });
                    },
                    (error) => {
                        console.error(error);
                        setStatus({ success: false, message: "Failed to send message. Try again." });
                    }
                );
  };

return (
    <div className="form flex flex-col items-center w-fit h-fit rounded-lg ml-auto mr-auto bg-white/30 backdrop-blur-sm border border-white/20 p-[3dvh]">
        <form onSubmit={handleSubmit} className="contact-form flex flex-col items-center gap-[1dvh]">

            <div>
                <label htmlFor="name" className="block text-white text-[2.5dvh]">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="block text-white rounded-md w-[60dvh] h-[7dvh] bg-transparent border-[0.5dvh] border-yellow-400"
                    required
                />
            </div>


            <div>
                <label htmlFor="email" className="block text-white text-[2.5dvh]">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter valid email"
                    className="block text-white rounded-md w-[60dvh] h-[7dvh] bg-transparent border-[0.5dvh] border-yellow-400"
                    required
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-white text-[2.5dvh]">Phone no. *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="block text-white rounded-md w-[60dvh] h-[7dvh] bg-transparent border-[0.5dvh] border-yellow-400"
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-white text-[2.5dvh]">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Enter your message here..."
                    className="block text-white rounded-md w-[60dvh] max-h-[20dvh] bg-transparent border-[0.5dvh] border-yellow-400"
                    required
                ></textarea>
            </div>

            <div>
                <button
                    type="submit"
                    className="button bg-yellow-400 p-[1dvh] font-semibold rounded-md text-[3dvh] hover:bg-yellow-500"
                >
                    Send
                </button>
            </div>
        </form>

        {status && (
            <div
                className={`font-bold text-[2.5dvh] mt-[2dvh] ${status.success ? "text-green-500" : "text-red-500"
                    }`}
            >
                {status.message}
            </div>
        )}
    </div>
);
};

export default ContactForm;

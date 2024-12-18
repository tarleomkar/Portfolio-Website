import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your Email.js Service ID, Template ID, and User ID
    const serviceID = 'service_vl89iqg';
    const templateID = 'template_8uw0yq9';
    const userID = 'Z2cIvWFhDB2IPe2ah';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Email error:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section name="contact" className="w-full min-h-screen bg-primary p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-purple-500 text-white">
            Contact Me
          </h2>
          <p className="py-6 text-gray-300">Get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-purple-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-purple-500"
              required
            />
            <button className="text-white bg-gradient-to-r from-purple-500 to-purple-800 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

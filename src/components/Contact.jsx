

// export default Contact;
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(
        'service_ad6wn19',      // Your EmailJS service ID
        'template_q0kyd6g',     // Your EmailJS template ID
        form.current,           // The form reference
        'waGj_-WM2xRis0oCJ'     // Your EmailJS user/public key
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>📬 Contact Me</h2>
      <div className="contact-content">
        {/* Info Section */}
        <div className="contact-info">
          <p><strong>Age:</strong> 21</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:brian.o.iraru@gmail.com">brian.o.iraru@gmail.com</a>
          </p>
          <p><strong>Certificate:</strong> Applied Software Engineering</p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+254743435490">+254 743435490</a>
          </p>
          <p><strong>City:</strong> Nairobi, Kenya</p>
          <p><strong>Freelance:</strong> Available</p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
          ></textarea>
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="status success">✅ Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="status error">❌ Failed to send message. Please try again.</p>
      )}
    </div>
  );
};

export default Contact;

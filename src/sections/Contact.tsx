import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
      I am currently seeking opportunities as a Data Analyst, Business Analyst, or Product Analyst, with a strong focus on extracting insights, solving business problems, and building data-driven solutions. Open to collaborations and connections—feel free to reach out, and I’ll get back to you at the earliest
      </p>
      <div className="contact-cta">
        <Button link="mailto:viveksharma19110@gmail.com" text="Say Hello" />
      </div>
      <p className="contact-whatsapp">Contact Number: 7011248517 (also available on WhatsApp)</p>
    </motion.div>
  );
}

export default Contact;

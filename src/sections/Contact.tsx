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
      I am currently seeking opportunities as a Full Stack Developer, Backend Developer,
       Frontend Developer, or Data Analyst. My inbox is always open for potential collaborations, or just to connect! Feel free to reach out and I will get back to you as soon as
         possible
      </p>
      <div className="contact-cta">
        <Button link="mailto:viveksharma19110@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;

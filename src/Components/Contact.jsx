import {useState} from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

import { useNavigate } from "react-router-dom";


const Contact = () => {

const [isSent, setIsSent] = useState(false);
const form = useRef();
 const navigate = useNavigate();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4jjynif",
      "template_agsdpjr",
      form.current,
      "jILyT651QttXA7XEY"      
    )
    .then(
      (result) => {
        console.log("Message Sent!", result.text);
        navigate("/Success"); 
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Failed to send message. Try again later.");
      }
    );
};






  return (
    <section id="contact" className="font-Inter px-10 md:px-20 md:mt-10 md:scroll-mt-55 scroll-mt-23">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
           {/* left-side */}
           <div>
           <h1 className="md:text-4xl font-extrabold text-3xl">
            Contact Me for any <br/>
            Collaboration
           </h1>
           <p className="text-gray-400 mt-2">I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Whether you have a question, want to work together, or just want to say hello — feel free to reach out and I’ll get back to you as soon as possible.</p>
           <div className="flex gap-7 mt-4">
              <a href="https://github.com/AmanSingh007coder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 px-1.5 py-1.5 border border-gray-500 rounded-lg "><FiGithub /></a>
              <a href="https://www.linkedin.com/in/aman-kumar-singh-4a6799348/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 px-1.5 py-1.5 border border-gray-500 rounded-lg "><FiLinkedin /></a>
              <a href="mailto:amansinghrajput1610@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-700 px-1.5 py-1.5 border border-gray-500 rounded-lg "><FaEnvelope /></a>
              <a href="https://www.instagram.com/itz_aman_rajput_007/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 px-1.5 py-1.5 border border-gray-500 rounded-lg "><FiInstagram /></a>
           </div>
           </div>

           {/* right-side */}

 <form ref={form} onSubmit={sendEmail} className="px-4 py-5 md:space-y-3">
  <div className="input grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-2.5">
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 font-medium">Name</label>
      <input type="text" name="from_name" placeholder="Your Name" required
        className="p-2 border border-zinc-600 rounded-lg bg-[#0c0c27] text-white" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 font-medium">Email</label>
      <input type="email" name="from_email" placeholder="Your Email" required
        className="p-2 border border-zinc-600 rounded-lg bg-[#0c0c27] text-white" />
    </div>
  </div>
  
  <div className="mt-4">
    <label htmlFor="message" className="font-medium">Message</label>
    <textarea name="message" placeholder="Your Message" rows={5} required
      className="p-2 border border-zinc-600 rounded-lg bg-[#0c0c27] text-white w-full mt-4"></textarea>
  </div>

  <button type="submit"
    className="bg-gradient-to-r from-blue-500 to-blue-700 
    hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg md:mt-0 w-full mt-3">
    Submit
  </button>
</form>

        </div>

        <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-8" />

    </section>
  )
}

export default Contact;
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// Firebase Auth
import { auth, googleProvider } from "../Firebase.js";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const Contact = () => {
  const [user, setUser] = useState(null);
  const form = useRef();
  const navigate = useNavigate();

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google login
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // EmailJS Send
  const sendEmail = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please sign in with Google first!");
      return;
    }

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
    <section
      id="contact"
      className="font-Inter px-10 md:px-20 md:mt-25 md:scroll-mt-55 scroll-mt-23 py-12"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left-side */}
        <div>
          <h1 className="md:text-4xl font-extrabold text-3xl">
            Contact Me for any <br />
           <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 text-transparent bg-clip-text"> Collaboration</span>
          </h1>
          <p className="text-gray-400 mt-2">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to collaborate. Whether you have a question, want to
            work together, or just want to say hello — feel free to reach out
            and I’ll get back to you as soon as possible. If you want to contact me, then kindly log in with Google first.
          </p>
          <div className="flex gap-7 mt-4">
            <a
              href="https://github.com/AmanSingh007coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 px-1.5 py-1.5 border border-gray-500 rounded-lg "
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-singh-be/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 px-1.5 py-1.5 border border-gray-500 rounded-lg "
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:amansinghrajput1610@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-700 px-1.5 py-1.5 border border-gray-500 rounded-lg "
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/itz_aman_rajput_007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 px-1.5 py-1.5 border border-gray-500 rounded-lg "
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* right-side */}
        <div
  className={`px-3 py-4 md:px-4 md:py-5 md:space-y-3 rounded-2xl h-full border border-blue-800
    ${!user ? "flex items-center justify-center" : ""}`}
>
          {!user ? (
            // Show only Google button if not logged in
           <button
  onClick={handleGoogleSignIn}
  className="bg-white hover:bg-gray-200 w-full md:w-3/4 py-3 rounded-2xl text-black shadow-md flex items-center justify-center gap-2 cursor-pointer"
>
  <FcGoogle size={22} /> Continue with Google
</button>

          ) : (
            <>
              <p className="text-green-400 mb-2">
                Logged in as {user.displayName || user.email}
              </p>
              

              {/* Contact Form */}
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      defaultValue={user.displayName || ""}
                      required
                      className="p-2 border border-zinc-600 rounded-lg bg-[#0a0a2a] text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      defaultValue={user.email}
                      readOnly
                      className="p-2 border border-zinc-600 rounded-lg bg-[#0a0a2a] text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="p-2 border border-zinc-600 rounded-lg bg-[#0a0a2a] text-white w-full mt-2"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg w-full"
                >
                  Submit
                </button>
                <button
                onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-lg w-full"
              >
                Logout
              </button>
              </form>
            </>
          )}
        </div>
      </div>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-15" />
    </section>
  );
};

export default Contact;




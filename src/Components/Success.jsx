import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; 

function Success() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center p-8 rounded-2xl shadow-lg bg-gray-800/50 backdrop-blur-lg border border-gray-700"
      >
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="w-16 h-16 text-green-400" />
        </motion.div>

       
        <h1 className="text-3xl font-bold tracking-wide">Thank You! 🎉</h1>
        <p className="mt-3 text-gray-300 text-lg">
          Your message has been delivered successfully.  
          I’ll get back to you as soon as possible.
        </p>

       
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
          text-white font-medium px-6 py-3 rounded-xl shadow-md transition duration-300"
        >
          ⬅ Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Success;





import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Header = () => {
    return (
        <header className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-2">
                    Andre Agung Purnomo.
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-medium">
                    Web Developer from Indonesia
                </p>
            </motion.div>

            <motion.div
                className="text-gray-600 leading-relaxed max-w-2xl text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>
                    I am a self-taught Web Developer with a strong passion for computers and technology
                    since Middle School. I believe in practical understanding over rote memorization.
                    Currently based in Semarang, I specialize in building functional and efficient web applications.
                </p>
            </motion.div>

            <motion.div
                className="flex flex-wrap gap-4 text-sm font-medium pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <motion.a
                    href="mailto:andrepurnomo04@gmail.com"
                    className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Mail size={16} />
                    Email Me
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/andreagungpurnomo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Linkedin size={16} />
                    LinkedIn
                </motion.a>
                <motion.a
                    href="https://github.com/andrepurnomo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Github size={16} />
                    GitHub
                </motion.a>
                <span className="flex items-center text-gray-500 px-2 gap-1.5">
                    <MapPin size={16} />
                    Semarang, Indonesia
                </span>
            </motion.div>
        </header>
    );
};

export default Header;

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer
            className="mt-24 pt-8 text-center border-t border-gray-100 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <p className="flex items-center justify-center gap-1.5">
                &copy; {new Date().getFullYear()} Andre Agung Purnomo. Made with
                <motion.span
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    <Heart size={14} className="fill-red-500 text-red-500" />
                </motion.span>
                in Semarang
            </p>
        </motion.footer>
    );
};

export default Footer;

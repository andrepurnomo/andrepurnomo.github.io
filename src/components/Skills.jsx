import { motion } from 'framer-motion';
import skillIcon from '../assets/images/skill.png';

const Skills = () => {
    const skills = [
        'PHP', 'JavaScript', 'Node.js', 'Python',
        'Laravel', 'Odoo', 'MySQL', 'PostgreSQL',
        'MongoDB', 'Docker', 'React', 'Tailwind CSS',
        'Flutter', 'Supabase'
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section>
            <motion.h2
                className="font-bold text-sm tracking-widest text-gray-600 uppercase mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Technical Skills
            </motion.h2>
            <motion.div
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        variants={item}
                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition cursor-default"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;

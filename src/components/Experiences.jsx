import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Experiences = () => {
    const experiences = [
        {
            title: 'Fullstack Developer',
            period: 'Jan 2019 - Present',
            company: 'PT Tri Sinar Purnama',
            companyUrl: 'http://trisip.com',
            description:
                'Leading development lifecycle from analysis to implementation using Python and Odoo Framework. Responsible for decision making and public speaking duties within the tech team.',
        },
        {
            title: 'Python Developer',
            period: 'Mar 2018 - Dec 2018',
            company: 'PT Siba Sistem',
            companyUrl: 'http://www.sibasistem.co.id/',
            description:
                'Specialized in Point of Sales and Reporting systems using Python and Odoo. Completed intensive one-month training on Odoo framework architecture.',
        },
        {
            title: 'PHP Developer',
            period: 'Jul 2017 - Feb 2018',
            company: 'PT Widya Solusi Utama',
            companyUrl: 'http://lokavor.studio/',
            description:
                'Developed production-ready applications using PHP Object-Oriented Programming. Rapidly self-taught Laravel framework within 2 weeks to meet project deadlines.',
        },
    ];

    return (
        <section>
            <motion.h2
                className="font-bold text-sm tracking-widest text-gray-600 uppercase mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Work Experience
            </motion.h2>
            <div className="space-y-12 border-l-2 border-gray-100 pl-8 ml-2 relative">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.span
                            className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-gray-200"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        ></motion.span>
                        <div className="mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-700 hover:underline flex items-center gap-1 group"
                                >
                                    {exp.company}
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <span>•</span>
                                <span>{exp.period}</span>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};


export default Experiences;

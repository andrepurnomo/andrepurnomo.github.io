import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
    const educations = [
        {
            level: 'University',
            period: '2018 - 2021',
            school: 'Unisbank',
            schoolUrl: 'https://www.unisbank.ac.id/',
            description: 'Information Systems Major (7th semester).',
        },
        {
            level: 'Vocational High School',
            period: '2014 - 2017',
            school: 'SMK N 8 Semarang',
            schoolUrl: 'https://smkn8semarang.sch.id/',
            description: 'Software Engineering Major.',
        },
        {
            level: 'Middle School',
            period: '2011 - 2014',
            school: 'SMP N 16 Semarang',
            schoolUrl: 'http://smpn16semarang.sch.id/',
            description: 'Started learning programming from here.',
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
                Education
            </motion.h2>
            <div className="space-y-8">
                {educations.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col sm:flex-row justify-between sm:items-start gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                                <a href={edu.schoolUrl} className="hover:underline inline-flex items-center gap-1.5 group">
                                    <GraduationCap size={18} className="text-gray-400" />
                                    {edu.school}
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </h3>
                            <div className="text-gray-600">{edu.level}</div>
                            <div className="text-sm text-gray-500 mt-1">{edu.description}</div>
                        </div>
                        <div className="text-sm text-gray-500 font-medium whitespace-nowrap">{edu.period}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;

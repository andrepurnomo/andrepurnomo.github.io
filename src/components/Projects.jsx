import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import mediskitaIcon from '../assets/images/projects/mediskita.png';
import tamukitaIcon from '../assets/images/projects/tamukita.png';
import dodolIcon from '../assets/images/projects/dodol.png';
import kitausahaIcon from '../assets/images/projects/kitausaha.png';
import kitaundiIcon from '../assets/images/projects/kitaundi.png';

const Projects = () => {
    const projects = [
        {
            name: 'Mediskita',
            description: 'Medical Records Management System',
            category: 'Healthcare',
            rating: 4.7,
            icon: mediskitaIcon,
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.semakode.mediskita',
            tech: ['Flutter', 'Firebase', 'Android', 'Windows'],
            packageId: 'com.semakode.mediskita'
        },
        {
            name: 'Tamukita',
            description: 'Digital Guest Book Application',
            category: 'Productivity',
            rating: 4.4,
            icon: tamukitaIcon,
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.semakode.tamukita',
            tech: ['Flutter', 'Firebase', 'Android', 'Windows'],
            packageId: 'com.semakode.tamukita'
        },
        {
            name: 'Dodol',
            description: 'Kasir Digital untuk UMKM',
            category: 'Business',
            icon: dodolIcon,
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.semakode.dodol',
            tech: ['Flutter', 'SQLite', 'Android', 'Windows'],
            packageId: 'com.semakode.dodol'
        },
        {
            name: 'Kitausaha',
            description: 'SME Management Platform',
            category: 'Business',
            icon: kitausahaIcon,
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.semakode.kitausaha',
            tech: ['Flutter', 'Firebase', 'Android'],
            packageId: 'com.semakode.kitausaha'
        },
        {
            name: 'Kitaundi',
            description: 'Digital Draw & Lucky Draw App',
            category: 'Entertainment',
            icon: kitaundiIcon,
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.semakode.kitaundi',
            tech: ['Flutter', 'Firebase', 'Android'],
            packageId: 'com.semakode.kitaundi'
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section>
            <motion.h2
                className="font-bold text-sm tracking-widest text-gray-600 uppercase mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Published Apps
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-md transition-all group"
                        whileHover={{ y: -4 }}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-gray-200">
                                    <img
                                        src={project.icon}
                                        alt={`${project.name} icon`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{project.name}</h3>
                                    <p className="text-xs text-gray-500">{project.category}</p>
                                </div>
                            </div>
                            {project.rating && (
                                <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                    {project.rating}
                                </div>
                            )}
                        </div>

                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group/link"
                        >
                            View on Play Store
                            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;

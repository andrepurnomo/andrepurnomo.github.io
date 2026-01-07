import contactIcon from '../assets/images/contact.png';

const Contact = () => {
    const contacts = [
        {
            label: 'Address',
            value: 'JL. Karonsih Timur Raya 1 No 161, Ngaliyan, Semarang, Indonesia.',
            link: null,
        },
        {
            label: 'Mobile',
            value: '087731588137',
            link: 'https://wa.me/6287731588137?text=Hello',
        },
        {
            label: 'Email',
            value: 'andrepurnomo04@gmail.com',
            link: 'mailto:andrepurnomo04@gmail.com?Subject=Hello',
        },
        {
            label: 'Website',
            value: 'andrepurnomo.github.io',
            link: 'https://andrepurnomo.github.io',
        },
        {
            label: 'LinkedIn',
            value: 'Andre Agung Purnomo',
            link: 'https://linkedin.com/in/andreagungpurnomo',
        },
    ];

    return (
        <div className="mb-6">
            <div className="flex items-center py-3 border-b-2 border-gray-100 tracking-wide">
                <img src={contactIcon} alt="Icon Contact" className="w-8 h-8 mr-4 grayscale opacity-80" />
                <span className="font-bold text-lg">CONTACT</span>
            </div>
            <div className="py-4">
                <ul className="space-y-4">
                    {contacts.map((contact, index) => (
                        <li key={index} className="py-1">
                            <span className="block text-xs font-bold text-gray-600 uppercase tracking-widest">{contact.label}</span>
                            {contact.link ? (
                                <a
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-900 hover:text-gray-600 transition duration-300"
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <span className="text-gray-900">{contact.value}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Contact;

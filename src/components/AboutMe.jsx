import userIcon from '../assets/images/user.png';

const AboutMe = () => {
    return (
        <div className="mb-6">
            <div className="flex items-center py-3 border-b-2 border-gray-100 tracking-wide">
                <img src={userIcon} alt="Icon About" className="w-8 h-8 mr-4 grayscale opacity-80" />
                <span className="font-bold text-lg">ABOUT ME</span>
            </div>
            <div className="py-4 text-justify text-gray-600 leading-relaxed">
                My name is Andre Agung Purnomo, I am a Full Stack Developer from Indonesia.
                I have built several websites for manufacturing companies and developed Flutter
                mobile applications that have been successfully released on the Play Store.
                I learned a lot of knowledge from the internet in a self-taught way. For me,
                there's no need to remember too many things. As long as you understand what
                you are doing.
            </div>
        </div>
    );
};

export default AboutMe;

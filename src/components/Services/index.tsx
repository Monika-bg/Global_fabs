
import { FaShieldAlt, FaSun, FaLeaf, FaAward } from 'react-icons/fa';

const services = [
    {
        title: "Custom Craftsmanship",
        icon: FaShieldAlt,
        desc: "Providing personalized solutions crafted with the utmost precision and dedication.",
    },
    {
        title: "Solar Power Solutions",
        icon: FaSun,
        desc: "Leverage solar energy with our state-of-the-art solar power solutions for a sustainable future.",
    },
    {
        title: "Eco-Friendly Products",
        icon: FaLeaf,
        desc: "Offering products designed with the environment in mind, promoting a greyer planet.",
    },
    {
        title: "Unmatched Quality",
        icon: FaAward,
        desc: "Ensuring top-notch quality in every product, delivering excellence and durability.",
    },
];

const Services = () => {
    return (
        <div className="w-full lg:px-36 px-5 lg:py-20 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
            {services.map((service) => (
                <div
                    key={service.title}
                    className="flex flex-col items-center gap-4 max-w-[280px] text-center"
                >
                    <service.icon className="w-14 h-14 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                    <a
                        href="#"
                        className="text-orange-500 hover:underline"
                    >
                       
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Services;

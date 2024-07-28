import { BrushOutline, LeafOutline, RainyOutline, RibbonOutline } from "react-ionicons";

const Services = () => {
	const services = [
		{
			title: "Modern Design",
			icon: BrushOutline,
			desc: "Embrace cutting-edge aesthetics and functionality with our meticulously crafted modern design solutions.",
		},
		{
			title: "Outdoor Solutions",
			icon: RainyOutline,
			desc: "Enhance your outdoor spaces with durable, stylish solutions designed to blend beauty and resilience.",
		},
		{
			title: "Environment Friendly",
			icon: LeafOutline,
			desc: "Commit to sustainability with our energy-efficient products that combine exceptional performance with eco-conscious design.",
		},
		{
			title: "Top Quality",
			icon: RibbonOutline,
			desc: "Experience unparalleled quality with our expertly crafted products, ensuring lasting durability and refined elegance.",
		},
	];
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-center justify-between gap-8">
			{services.map((service) => (
				<div
					key={service.title}
					className="flex flex-col items-center gap-3"
				>
					<service.icon
						color="#425e85"
						width={"50px"}
						height={"50px"}
					/>
					<span className="font-semibold text-[20px]">{service.title}</span>
					<p className="text-gray-600 leading-7 text-center max-w-[350px]">{service.desc}</p>
					<a
						href="#"
						className="text-[#425e85]"
					>
						Read More
					</a>
				</div>
			))}
		</div>
	);
};

export default Services;

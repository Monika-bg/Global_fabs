import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Contact from './components/contact';
import Designs from "./components/Designs";
import Gallery from "./components/Gallery";


const App = () => {
	return (
		<Router>
			
			<Routes>
				<Route path="/" element={
					<>
					
					<Header />
						<Intro />
						<Collections />
						<Explore />
						<Banner />
						<Services />
						<Contact />
						<Footer />
					</>
				} />
				<Route path="/designs" element={<Designs />} />
				<Route path="/gal" element={<Gallery />} />
			</Routes>
		</Router>
	);
};

export default App;

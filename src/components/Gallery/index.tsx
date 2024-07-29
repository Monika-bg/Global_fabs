
import './gallery.css'; // Ensure this file is imported
import HeaderTop from '../Headertop';
import Footer from '../Footer';

// Sample images - Replace with actual paths
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/5.jpg';
import image6 from '../../assets/images/6.jpg';
import image7 from '../../assets/images/7.jpg';
import image8 from '../../assets/images/8.jpg';
import image9 from '../../assets/images/9.jpg';
import image10 from '../../assets/images/10.jpg';
import image11 from '../../assets/images/11.jpg';
import image12 from '../../assets/images/12.jpg';
import image13 from '../../assets/images/13.jpg';
import image14 from '../../assets/images/14.jpg';
import image15 from '../../assets/images/15.jpg';
import image16 from '../../assets/images/16.jpg';
import image17 from '../../assets/images/17.jpg';
import image18 from '../../assets/images/18.jpg';
import image19 from '../../assets/images/19.jpg';
import image20 from '../../assets/images/20.jpg';
import image21 from '../../assets/images/21.jpg';

// Add more imports for the remaining images

const images = [
  image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image17,image18,image19,image20,image21/* ... add all 32 image imports here */
];

const Gallery = () => {
  return (
    <>
      <HeaderTop />
      <div className="gallery-container">
        <h1 className="gallery-heading">Gallery</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery Item ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;

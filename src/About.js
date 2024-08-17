import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontex';

const About = () => {
  const data = {
    name: "Thapa Ecommerce",
  }
  const {myname} = useProductContext();
  return (
    <>
      {myname}
      <HeroSection mydata={data}/>
    </>
  )
}

export default About;

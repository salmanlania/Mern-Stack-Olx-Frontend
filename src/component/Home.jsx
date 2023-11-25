import React from 'react';
import '../css/Home.css'
import lap from '../assets/lap.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import s8 from '../assets/s8.jpg'
import bg1 from '../assets/bg1.jpg'
import ProdctCard from './ProductCard.jsx'
import Footer from './Footer.jsx';

const ProductList = () => (
  <section className="cardbox">
   
    {/* Second Line */}
    <ProdctCard image={s4} title={"Mobile Phone"} price={"500000"} button={"Add To Cart"}  />
    <ProdctCard image={s6} title={"Speaker"} price={"65000"} button={"Add To Cart"}  />
    <ProdctCard image={s7} title={"Wacth"} price={"990000"} button={"Add To Cart"}  />
    <ProdctCard image={s8} title={"Wacth"} price={"990000"} button={"Add To Cart"}  />

  </section>
);



const Home = () => (
  <div className='Home'>
    <div className='First-Background'>
      <img src={bg1} width="100%" alt="" />
    </div>
    <br />
    <br />
    <div className="cont6 text-center">
      <h4>Fresh recommendations</h4>
    </div>

    {/* Product List */}
    <ProductList />

    <br /><br />
    <Footer />
  </div>
);

export default Home;

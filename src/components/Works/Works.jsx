import React from 'react';
import Img1 from '../../assets/WorksImg/Rectangle 8.png'
import Img2 from '../../assets/WorksImg/Rectangle 9 (1).png'
import Img3 from '../../assets/WorksImg/Rectangle 9 (2).png'
import Img4 from '../../assets/WorksImg/Rectangle 9 (3).png'
import Img5 from '../../assets/WorksImg/Rectangle 9.png'
import Img6 from '../../assets/WorksImg/Rectangle 10.png'
import Img7 from '../../assets/WorksImg/Rectangle 10 (1).png'
import Img8 from '../../assets/WorksImg/Rectangle 10 (2).png'

import Img9 from '../../assets/WorksImg/Rectangle 10 (3).png'

const Works = () => {
    return (
        <section className='container mx-auto  '>
            <div className='mt-10 space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
        </div>
        </section>
    );
};

export default Works;
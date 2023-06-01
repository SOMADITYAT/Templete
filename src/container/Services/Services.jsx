import React from "react";
import {FaHospitalAlt ,FaBed, FaHospitalUser, FaDna, FaWheelchair, FaNotesMedical} from "react-icons/fa"
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Facilities</h2>
          <p>
            Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam
            volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
            Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
            Phasellus placerat mi et suscipit pulvinar. Donec quis tristique
            lectus.
          </p>
        </div>
        {/* <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                 <div className="icon">
                     <FaHospitalAlt className="Services-icon"/>
                     <h4><a href="">24x7 Emergency Available</a></h4>
                     <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                 <div className="icon">
                     <FaBed className="Services-icon"/>
                     <h4><a href="">24x7 Emergency Available</a></h4>
                     <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                 <div className="icon">
                     <FaHospitalUser className="Services-icon"/>
                     <h4><a href="">24x7 Emergency Available</a></h4>
                     <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                 <div className="icon">
                     <FaDna className="Services-icon"/>
                     <h4><a href="">24x7 Emergency Available</a></h4>
                     <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                 <div className="icon">
                     <FaWheelchair className="Services-icon"/>
                     <h4><a href="">24x7 Emergency Available</a></h4>
                     <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                 <div className="icon">
                     <FaNotesMedical className="Services-icon"/>
                     <h4><a href="">24x7 Emergency Available</a></h4>
                     <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                 </div>
              </div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;

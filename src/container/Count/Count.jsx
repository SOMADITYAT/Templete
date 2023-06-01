import React from 'react'
import { BsHeartbreak, BsHospital, BsPeople} from "react-icons/bs"
import { CgAwards} from "react-icons/cg"

const Count = () => {
  return (
    <section id='counts' className='counts' >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <BsPeople className='BsIcon'/>
                            <span>23</span>
                            <p>Doctors</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <BsHospital className='BsIcon'/>
                            <span>18</span>
                            <p>Deparements</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <BsHeartbreak className='BsIcon'/>
                            <span>980</span>
                            <p>Patients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <CgAwards className='BsIcon'/>
                            <span>23</span>
                            <p>Awards</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    </section>
  )
}

export default Count
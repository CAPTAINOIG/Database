import React from 'react'
import graduate1 from '../component/Student/image/graduate1.jpg'
import software from '../component/Student/image/software.jpg'
import data from '../component/Student/image/data.jpg'
import '../assets/Styles/Card.css'


import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-10 col-sm-12 mt-5">
            <img className="img-fluid" src={graduate1} width="750" alt="" />
          </div>
          <div className="col-lg-5 col-md-10 col-sm-12">
            <h1 id="make" className="fw-bold mt-5">Making Africa a <br /> Tech Continent…</h1>
            <p className="fs-5">We focus on quality teaching, learning and <br /> training to the globally acceptable productivity <br /> standard in accordance with the requirements of <br /> the industry, for which necessary research and <br /> preparation of courses are ensured to make <br /> industry-ready professionals.</p>

            <p className="fs-5"> SQI College of ICT is closely watching the <br /> interaction of industry and academia, getting <br /> feedback from our industry partners to provide <br /> the needed training while concentrating to <br /> contribute industry needed professionals in a very <br /> flexible study structure.</p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 id="top">
              Our Top Courses
            </h1>
            <p>Take a look at some of our popular courses</p>

            <Link id='ref' to="">View all courses</Link>

            <div className="card mt-5 w-100">
              <img src={software} class="card-img-top" alt="..." />

              <div className="card-body">
                <h1 className="card-title">Software Engineering</h1>
                <p className="card-text">Software Engineering is one of the most in-demand jobs across the globe today.</p>
                <p>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                <Link to="#">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="card2" className="card w-100">
              <img src={data} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">Data Science & Analysis</h1>
                <p className="card-text">The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
                <p>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
                <Link to="#">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card
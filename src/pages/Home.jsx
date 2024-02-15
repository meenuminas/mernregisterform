import React from 'react'
import regstu from '../assets/regstu.png'
import Regis from '../components/Regis'
function Home() {
  return (
    <>

   <div className="w-100 d-flex justify-content-center align-items-center rounded bb" style={{height:'800px'}}>
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-lg-4 fw-bolder text-dark mb-3">
                                <img className='img-fluid'  src={regstu} alt="landing" />
                                    <h1 style={{fontSize:'80px',marginTop:'10px'}} className='fw-bolder  mb-3 hh ' >    Welcome     </h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facere reiciendis officiis obcaecati, dolore cumque asperiores earum aliquam sint nam omnis, accusantium nulla voluptates, quas illum. Incidunt eum deleniti aliquid?</p>
                                </div>
                                <div className="col-lg-8">
  <Regis></Regis>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Home
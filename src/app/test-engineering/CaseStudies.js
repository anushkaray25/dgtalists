import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
const CaseStudies = () => {
  return (
    <>
    
    <section className="all_case_studies" style={{backgroundImage: "url(/case-study-bg.jpg)"}}>
      <div className="container">
      <h2 className="heading">Check Few Of Our 
          Case Studies</h2>
        <p className="sub-heading">At DGTALISTS, we are committed to making testing more efficient by adopting the
          proprietary Integrated Manual and Automated Testing (IMAAT) approach. Our proficient Test Automation Leads
          conduct a meticulous analysis to gauge the feasibility of automated testing for each project, meticulously
          weighing the potential Return on Investment (ROI).
          After establishing the economic viability, we develop reusable test scripts to expedite the process. These are
          designed for automated testing at the level of UI and API. We follow a meticulous approach, ensuring seamless
          and quick integration of test automation in just 3 weeks. This ensures efficiency as well as a robust
          foundation for comprehensive testing strategies.</p>
      </div>
    </section>
    <div className="all_case_studies_wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image src="/automation-test.jpg" width={415} height={276} alt="case-img"/>
                <div className="readmore">
                  <Link href="automation-testing"><IoIosArrowRoundForward/></Link>
                </div>
              </div>
              <div className="case_content">
                <Link href="automation-testing">Automation Testing Using Selenium</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image width={415} height={276} src="/saas-case.jpg" alt="case-img"/>
                <div className="readmore">
                  <Link href="saas-based-case-study"><IoIosArrowRoundForward/></Link>
                </div>
              </div>
              <div className="case_content">
                <Link href="saas-based-case-study">RFID based Asset Tracking Solution And EAM</Link>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="each_case_box">
              <div className="case_img">
                <Image width={415} height={276} src="/mobile-case.jpg" alt="case-img"/>
                <div className="readmore">
                  <Link href="katalon-case-study"><IoIosArrowRoundForward/>
</Link>
                </div>
              </div>
              <div className="case_content">
                <Link href="katalon-case-study">RFID based Asset Tracking Solution And EAM</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CaseStudies
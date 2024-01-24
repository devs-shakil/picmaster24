import Testimonial from '../components/Testimonial/Testimonial'
import ImageWithText from './../components/ImageWithText/ImageWIthText'


export default function about() {
    return (
        <>
            <ImageWithText
              title={"Perfect Clipping Path & Photoshop Services"}
              subtitle="picmaster24 is an internet based outsourcing organization which is situated in the emerging Asian economic reason; where it is geologically and technologically opportune with low cost. "

              subtitleTwo = {" Picmaster24.com is a full service photo editing and retouching studio offering our services to ecommerce, product photographers, model photographers, photography agencies, brands, fmcg product photography companies and more.  We have a team of 10+ Full time highly skilled graphics designers professionals with several years of experience.  "}

              subtitleThree = {"  We feel proud to serve our customers 24X7 days. Our team is divided into 3-shift to operate 24 hours a day, so we can provide best quality image editing work for your satisfaction at your convenience."}
              
              image='/images/about-us.jpg'
              imageFirst = {true}
              buttonOne={"Get started"}
              buttonTwo=""
              bgWhite ={false}
           />
          <ImageWithText
              heading="Our Skill & Expertise"
              subtitle="picmaster24.com is experts hold the highest certifications in multiple area and have years of experience working with multiple area. Expert services include everything from Retouching a photo, Background Remove, Shadow Masking, Color Correction, Image Masking and designing as per clients demand.  "
              subtitleTwo = {"Choose the category that fits your needs from our services, read our service and portfolio."}
              image='/images/about.jpg'
              imageFirst = {false}
              buttonOne=""
              buttonTwo=""
              bgWhite={true}
          />
          {/* <Testimonial/> */}
        </>
      
    )
  }
  
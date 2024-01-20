import ImageWithText from "./components/ImageWithText/ImageWIthText";
import image from './../public/images/header-right.png'
import Services from "./components/Services/Services";
import OurProcess from "./components/OurProccess/OurProcess";


export default function Home() {
  return (
  <main>
     <ImageWithText
      title={"Perfect Clipping Path & Photoshop Services"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros"}
      image={image}
      imageFirst = {false}
      buttonOne={"Get started"}
      buttonTwo={"See Portfolio"}
     />
     <Services
      title = {"Our Services"}
      subtitle={ "We probably operate the best offshore Graphics design studio in Asia. To make sure we keep delivering top quality we only employ the best DTP professionals."}
      slider = {true}
     />
     <OurProcess
      title={"Our Process"}
      subtitle={"First Take the pictures by yourself ==> either with a camera or phone. Then you upload the pictures to us via we-transfer/ Dropbox or FTP server. We Process Your Photo according to your requirements. Finally, You Will receive the finished images from us, Ready within time."}
     />
  </main>
    
  )
}

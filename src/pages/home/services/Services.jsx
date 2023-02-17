import ServicesCard from "../../../components/shared/seviceCard/ServicesCard"
import service1 from "../../../assets/images/b1.png"
import service2 from "../../../assets/images/b2.png"
import service3 from "../../../assets/images/b3.png"
import { TextHeader } from "../../../components/UI/titleText/Text"

const Services = () => {

    const serviceItems =[
        {
            id:1,
            img : service1,
            text: "Tour and Travel!",
            description: `
            I am development static and dynamic websites as per your requirements,
            "web worlds's home"
            `
         },
        {
            id:1,
            img : service2,
            text: "Extra Features",
            description: `
             Development static and dynamic websites as per your requirements,
            "web worlds's home"
            `
         },
        {
            id:1,
            img : service3,
            text: "Our Guides",
            description: `
            I am development static and dynamic websites as per your requirements,
            "web worlds's home"
            `
         },
    ]  

  return (
    <>
     <div>
        <TextHeader textHeader= "Our services"/>
     </div>
     <div className="grid grid-cols-3 justify-items-center">
        {
             serviceItems.length > 0 ? (
               serviceItems.map((serviceItem)=>(    
                <ServicesCard serviceItem={serviceItem} />
               ))
             ) : "Our Service is Disable Right Now!!!"
        }
     </div>
    </>
  )
}

export default Services;
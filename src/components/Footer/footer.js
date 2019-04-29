import React from "react"
import FooterStyles from "./footer.module.scss"
const Footer = () => {
  return (
    <div className={FooterStyles.position}>
      <p>Handcrafted with &hearts; by Lab Ventures</p>
      <p>
        Reach us at:{" "}
        <a href="https://www.google.com.br/maps/place/Av.+Pl%C3%ADnio+Kroeff,+1715+-+Rubem+Berta,+Porto+Alegre+-+RS,+91150-170/@-29.9968535,-51.1156693,17z/data=!3m1!4b1!4m5!3m4!1s0x9519768b9a75caa7:0x63c95e432595a41a!8m2!3d-29.9968582!4d-51.1134753">
          Av. Plínio Kroeff, 1715.
        </a>{" "}
        Porto Alegre/RS - Brazil{" "}
      </p>
    </div>
  )
}

export default Footer

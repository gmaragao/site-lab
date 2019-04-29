import React from "react"
import { Link } from "gatsby"
import ContentStyle from "./container.module.scss"

const ContainerContent = () => {
  return (
    <div>
      <h2 className={ContentStyle.footerText} />
      <h3 className={ContentStyle.footerText} />
      <p className={ContentStyle.footerText} />
    </div>
  )
}

export default ContainerContent

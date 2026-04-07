import "./SinglePostTemplate.module.css"
import MainHeader from "@/reusable_sections/Header"
import SinglePostTemplate from "./sections/SinglePostTemplate"
import Footer from "@/reusable_sections/Footer"

export default function SinglePostTemplatePage() {

  return (
    <div>
      <MainHeader />
      <SinglePostTemplate />
      <Footer />
    </div>
  )
}

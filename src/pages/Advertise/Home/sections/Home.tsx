import "./Home.module.css"
import MainHeader from "@/reusable_sections/Header"
import TheGateway from "./sections/TheGateway"
import DirectoryByState from "./sections/DirectoryByState"
import BrowseByInterest from "./sections/BrowseByInterest"
import FeaturedDigitalPartners from "./sections/FeaturedDigitalPartners"
import StartYourStory from "./sections/StartYourStory"
import ReadersPerspectives from "./sections/ReadersPerspectives"
import LatestInsights from "./sections/LatestInsights"
import Footer from "@/reusable_sections/Footer"

export default function HomePage() {

  return (
    <div>
      <MainHeader />
      <TheGateway />
      <DirectoryByState />
      <BrowseByInterest />
      <FeaturedDigitalPartners />
      <StartYourStory />
      <ReadersPerspectives />
      <LatestInsights />
      <Footer />
    </div>
  )
}

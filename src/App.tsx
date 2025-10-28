
import './App.css'
import FooterSection from './components/FooterSection'
import type { FooterItemType } from './types/FooterItemType'

function App() {
  

  const sections :FooterItemType[] = [
  {
      title: "About YouTube",
      links: [
        "About",
        "Blog",
        "How YouTube Works",
        "Jobs",
        "Press",
        "YouTube Culture & Trends",
        "NFL Sunday Tickets",
      ]
    },
    {
      title: "Products",
      links: [
        "YouTube Kids",
        "YouTube Music",
        "YouTube Originals",
        "YouTube Select",
        "YouTube Studio",
        "YouTube TV",
      ]
    },
    {
      title: "For Business",
      links: ["Developers", "YouTube Advertising"],
    },
    {
      title: "For Creators",
      links: [
        "Creating For YouTube Kids",
        "Creator Research",
        "YouTube Artists",
        "YouTube Creators",
        "YouTube NextUp",
        "YouTube VR",
      ]
    },
    {
      title: "Our Commitments",
      links: ["Creator For Change", "CSAI Match"],
    }
  ]

  return (
    <>
      <FooterSection data={sections} />
    </>
  )
}

export default App

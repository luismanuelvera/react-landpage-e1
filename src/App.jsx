import { Background } from "./Components/Background/Background";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { useEffect, useState } from "react";

export const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"}
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count === 2 ? 0 : count++})
    }, 3000);
  }, [])

  return (
    <div>
      <Background
        playStatus={playStatus} 
        heroCount={heroCount}>
      </Background> 
      <Navbar></Navbar>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}        
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      ></Hero>
    </div>
  )
}

export default App

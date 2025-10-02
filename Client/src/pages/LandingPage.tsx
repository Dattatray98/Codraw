import { useEffect, useState } from "react"
import Navbar from "../Components/Common/Navbar"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
const LandingPage = () => {
  const [CurrentName, setCurrentName] = useState(0);

  const names = ['Coders', 'Planers', 'Workers']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(prev => (prev + 1) % names.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [])


  return (
    <div className="bg-[#ffffff]">
      {/* Navbar */}
      <header className="h-15">
        <Navbar />
      </header>

      {/* Hero section */}
      <main className="px-4">
        <section className="h-[93.5vh] p-20 flex gap-2 relative">
          <img src="./scribble.png" alt="scribble" className="absolute h-40 w-40 top-10" />
          <div className="px-8 py-35 w-[50%]">

            <h1 className="text-6xl font-medium">Welcome! to CoDraw</h1>
            <div className="gap-2 flex items-center mt-5">
              <h2 className="text-4xl font-medium">A Collaborative platform for</h2>

              <div className="overflow-hidden h-10 w-48 relative">
                <AnimatePresence>
                  <motion.div
                    key={names[CurrentName]}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 1.5, ease: easeInOut }}
                    className="text-4xl font-medium absolute top-[2px] left-0"
                  >
                    {names[CurrentName]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex mt-10 ml-5 gap-5">
              <button className="border-2 px-10 py-2 rounded-xl border-gray-300 bg-amber-300">Get Started</button>
              <button className="border-2 px-10 py-2 rounded-xl border-gray-300">Learn More</button>
            </div>
          </div>

          <div className="w-[50%] flex justify-center items-center">
            <div className="h-full w-full flex justify-center items-center">
              <img src="./hero2.png" alt="CoDraw" className="bg-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


export default LandingPage
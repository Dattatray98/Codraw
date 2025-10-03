import { navLinks } from "../../types/Navbar.types"

const Navbar = () => {
  return (
    <nav className="border border-gray-300 h-15 flex justify-between items-center px-8 bg-gray-50">
      <div className="text-2xl font-bold px-5 py-1">CoDraw</div>
      <div className="md:flex gap-4 hidden px-5">
        {navLinks.map((navlink) => (
          <p key={navlink.id}
          className="text-lg font-medium"
          >{navlink.label}</p>
        ))}
      </div>
      <div className="flex gap-5">
        <button className="border border-gray-300 py-2 px-5 rounded-xl bg-blue-100 font-medium shadow-sm hover:scale-[1.02] transition-all duration-300">Sign Up</button>
        <button className="border border-gray-300 py-2 px-7 rounded-xl font-medium shadow-sm hover:scale-[1.02] transition-all duration-300">Login</button>
      </div>
    </nav>
  )
}

export default Navbar

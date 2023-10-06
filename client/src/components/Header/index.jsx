import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-slate-200 p-3 flex justify-evenly items-center ">
      <Link to='/home'>
        <div className="font-bold text-sm sm:text-xl">
          <span className="text-slate-700">H</span>
          <span className="text-slate-500">Dream</span>
        </div>
      </Link>

      <form className="bg-slate-100 rounded-lg p-3 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-24 focus:outline-none text-sm"
        />
      </form>

      <div className="flex gap-3">
        <Link to='/auth'>
          <span>SIGN IN</span>
        </Link>
        <Link to='/auth'>
          <span>SIGN UP</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
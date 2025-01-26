import Header from "./Header"

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" alt="Logo"  />
      </div>
      <form className=" relative p-12 bg-black">
        <input type="email" placeholder="Email Address" className="m-2 p-2"/>
        <input type="password" placeholder="Password" className="m-2 p-2" />
        <button className="p-4 m-4">Sign In</button>
      </form>
       
    </div>
  )
}

export default Login

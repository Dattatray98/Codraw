
const Login = () => {
  return (
    <div className="xl:h-[80%] w-[80%] max-w-[150vh] z-11 border rounded-xl shadow-2xl border-blue-50 flex ">

      {/* Login block */}
      <div className="xl:border-r-2 border-gray-200 flex-col flex gap-2 w-full xl:w-[50%] md:rounded-l-xl p-15 items-center bg-gradient-to-bl from-blue-100 via-amber-50 to-blue-200">
        {/* Heading text */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-center mb-3">CoDraw</h1>
          <p className="text-center">Welcome to CoDraw Login into your CoDraw account and coninue your journey</p>
        </div>
        {/* email input */}
        <div className="border-2 h-10 border-gray-300 rounded-xl w-[30vh] md:w-[40vh] ">
          <input type="text" placeholder="Enter Your Email" className="h-full w-full outline-none px-3 font-medium " />
        </div>

        {/* password input  */}
        <div className="border-2 h-10 border-gray-300 rounded-xl w-[30vh] md:w-[40vh] ">
          <input type="password" placeholder="Enter Your Password" className="h-full w-full outline-none px-3 font-medium" />
        </div>

        {/* login button */}
        <div className="flex justify-center mt-10">
          <button className="border py-1 w-[30vh] md:w-[40vh] rounded-xl font-medium text-lg">Login</button>
        </div>

        <h1 className="font-medium my-5">Or Continue with </h1>

        <div className="flex gap-5">
          <button className="border py-2 px-10 rounded-xl">Google</button>
          <button className="border py-2 px-8 rounded-xl">FaceBook</button>
        </div>

      </div>

      {/* info block */}
      <div className="w-[50%] rounded-r-xl xl:block hidden relative ">
        <img src="login1.png" alt="login" className="h-full w-full rounded-r-xl"/>
      </div>
    </div>
  )
}

export default Login  

import InputFeild from "../InputFeild";

const Login = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg">Welcome Back</h2>
        <p className="font-extralight text-stone-400">
          Login with your google account
        </p>
        
      </div>
      <div className="mt-4 w-3/4">
        <div className="">
          <InputFeild
            placeholder="Enter Your Email"
            type="email"
            focus={true}
            InputSize="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

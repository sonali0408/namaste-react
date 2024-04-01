import InputControl from "./InputControl";
const Login = () => {
  return (
    <div className="w-4/12 mx-auto text-left">
      <h1 className="mb-4">Login</h1>

      <InputControl
        label="Email"
        placeholder="Enter e-mail address"
      ></InputControl>
    </div>
  );
};

export default Login;

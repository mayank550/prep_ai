import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Background Image */}
      <img
        src="/assets/img/bg.png"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt="Background"
      />

      {/* Centered Container */}
      
        <div className=" flex items-center justify-center h-full">
          <Outlet />
        </div>
      
    </div>
  );
};

export default AuthenticationLayout;

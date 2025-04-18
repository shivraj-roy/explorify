const AuthLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
         {children}
      </div>
   );
};
export default AuthLayout;

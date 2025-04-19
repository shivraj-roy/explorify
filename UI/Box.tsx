type BoxPropTypes = {
   children: React.ReactNode;
   boxClass?: string;
};

const Box = ({ children, boxClass }: BoxPropTypes) => {
   return (
      <div className={`flex items-center justify-center ${boxClass}`}>
         <div className="p-8 rounded-lg shadow-md w-[320] md:w-[400] max-w-md backdrop">
            {children}
         </div>
      </div>
   );
};
export default Box;

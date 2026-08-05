const Button = ({ children }) => {
  return (
    <button className="rounded-md bg-[#1b2438] px-5 py-2 text-white transition-all duration-300 inline-flex items-center gap-2 bg-sky-600 font-medium hover:scale-105">
      {children}
    </button>
  );
};

export default Button;
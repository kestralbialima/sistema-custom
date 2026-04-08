export const Button = ({ children, variant = 'primary', onClick, className, icon: Icon }) => {
  const styles = {
    primary: "bg-[#002B5B] text-white hover:bg-[#003d82]",
    outline: "border border-[#002B5B] text-[#002B5B] hover:bg-gray-50",
    sage: "bg-[#508068] text-white hover:opacity-90",
  };

  return (
    <button 
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-bold transition-all uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 ${styles[variant]} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};
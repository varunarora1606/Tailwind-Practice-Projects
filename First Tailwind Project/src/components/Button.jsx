export const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`m-8 text-sm rounded-lg font-bold ${
        disabled ? "bg-[#33BFB8] text-[#00274E]" : "bg-white/40"
      }  h-10 w-64`}
    >
      {children}
    </button>
  );
};

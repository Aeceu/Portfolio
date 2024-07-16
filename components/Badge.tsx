const Badge = ({ text }: { text: string }) => {
  return (
    <span className="text-xs rounded-full font-bold text-slate-950 bg-white w-max px-2 py-1 md:px-3 md:py-1.5 shadow-slate-sm">
      {text}
    </span>
  );
};

export default Badge;

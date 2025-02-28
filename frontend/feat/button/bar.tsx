interface BarButtonProps {
  icon: string;
  text: string;
  className?: string;
}

export default function BarButton({ icon, text, className }: BarButtonProps) {
  return (
    <div>
      <button
        className={`flex flex-row border-2 border-orange-500 p-2 px-3 w-36 rounded-xl text-orange-500 gap-1 place-content-center hover:text-white hover:bg-orange-500 hover:cursor-pointer font-bold ${className}`}
      >
        <span className="material-icons">{icon}</span>
        <span>{text}</span>
      </button>
    </div>
  );
}

interface IconButtonProps {
  icon: string;
}

export default function IconButton({ icon }: IconButtonProps) {
  return (
    <button className="border rounded-sm p-2 border-orange-200 h-min flex hover:bg-orange-500 hover:text-white text-orange-500">
      <span className="material-icons">{icon}</span>
    </button>
  );
}

interface BarButtonProps {
  icon: string;
  text: string;
}

export default function BarButton({ icon, text }: BarButtonProps) {
  return (
    <div>
      <button>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  );
}

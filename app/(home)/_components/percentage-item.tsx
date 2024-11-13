import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string; // Passe o título diretamente em português
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* Ícone */}
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-white bg-opacity-[3%] p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">
        {new Intl.NumberFormat("pt-BR", {
          style: "percent",
          minimumFractionDigits: 0,
        }).format(value / 100)}
      </p>
    </div>
  );
};

export default PercentageItem;

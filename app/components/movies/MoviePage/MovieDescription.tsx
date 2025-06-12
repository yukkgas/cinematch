interface MovieDescriptionProps {
  plot?: string;
}

export const MovieDescription = ({ plot }: MovieDescriptionProps) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Description</h2>
    <p className="text-gray-300">{plot || "Описание отсутствует"}</p>
  </div>
);

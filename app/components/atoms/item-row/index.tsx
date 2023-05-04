interface ItemRowProps {
  name: string;
  price: number;
}

export default function ItemRow({ name, price }: ItemRowProps) {
  return (
    <div className="flex gap-8">
      <p className="text-zinc-100">{name}</p>
      <p className="text-zinc-100">{price}</p>
    </div>
  );
}

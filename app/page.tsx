const items = ['AK-47 | Elite Build', 'M4A1-S | Night Terror'];

async function getItems() {
  const prices = [];

  for (const name of items) {
    const encodedName = encodeURI(name);
    const url = `http:/localhost:3000/api/item?name=${encodedName}`;
    const res = await fetch(url, { method: 'GET', next: { revalidate: 1 } });

    if (!res.ok) throw new Error('Failed to fetch data');

    const json = await res.json();
    prices.push(json);
  }

  return prices;
}

export default async function Home() {
  const data = await getItems();

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-950 p-12">
      <h1 className="text-center text-6xl font-black tracking-wider text-zinc-300">
        Skin Inwestor
      </h1>
      <h2 className="mt-3 text-center text-2xl font-semibold tracking-wide text-zinc-500">
        by @novacooo
      </h2>
      <div className="mt-8 flex flex-col gap-2">
        {/* {items.map(({ name, price }) => (
          <ItemRow key={name} name={name} price={price} />
        ))} */}
        <p className="text-3xl text-zinc-100">{JSON.stringify(data)}</p>
      </div>
    </main>
  );
}

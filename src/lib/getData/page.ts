export default async function getData(url: string) {
  // const res = fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    cache: 'no-store',
    next: {
      tags: ['product'],
      // revalidate: 30
    },
  });
  return res.json();
}

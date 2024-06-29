'use client';
import { fetcher } from '@/lib/swr';
import { Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import CardDeals from '../../ui/CardDeals/page';
const roboto = Roboto({ subsets: ['latin'], weight: '500' });
function DealsPage() {
  const [nilai, setNilai] = useState('');
  const [api, setApi] = useState('api/deals');
  const handleChange = (e: any) => {
    setNilai(e.target.value);
  };

  useEffect(() => {
    if (nilai === '') {
      setApi('api/deals');
    } else {
      setApi('api/deals/category/' + nilai);
    }
  }, [nilai]);
  return (
    <div className="flex flex-col mb-10">
      <div className="flex pl-9 pt-9 pb-9">
        <div className="w-[40%]">
          <h1 className={`${roboto.className} text-8xl leading-[110px]`}>
            <span className="text-purple-700">Book </span>
            Open Your Mind About World.
          </h1>
        </div>
        <div className="rounded-tl-[150px] overflow-hidden pr-0">
          <img src="/book-cover.jpg" alt="" className="w-[800px] h-[500px]" />
        </div>
      </div>
      <div className="flex w-full justify-center my-16">
        <div className="flex justify-between rounded-3xl shadow-xl w-[80%]  border p-3">
          <input
            value={nilai}
            onChange={handleChange}
            className="border rounded-full p-2 w-[60%] outline-none focus:ring focus:ring-primary"
          />
          <button className="border p-2 rounded-md text-white bg-primary">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap  justify-evenly items-center mt-9 w-[80%]  mx-auto my-0">
        <CardDeals api={api} />
      </div>
    </div>
  );
}

export default DealsPage;

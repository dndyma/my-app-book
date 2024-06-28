'use client';
import { fetcher } from '@/app/lib/swr';
import { Roboto } from 'next/font/google';
import { useEffect } from 'react';
import useSWR from 'swr';
import CardDeals from '../../ui/CardDeals/page';
const roboto = Roboto({ subsets: ['latin'], weight: '500' });
function DealsPage() {
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
        <div className="flex justify-center rounded-3xl shadow-xl w-[80%] h-[50px] border">
          {/* bagian dropdown terakhir */}
        </div>
      </div>
      <div className="flex flex-wrap  justify-evenly items-center mt-9 w-[80%]  mx-auto my-0">
        <CardDeals />
      </div>
    </div>
  );
}

export default DealsPage;

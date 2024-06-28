import { fetcher } from '@/app/lib/swr';
import Link from 'next/link';
import React, { useEffect } from 'react';
import useSWR from 'swr';

function CardDeals() {
  const { data, error } = useSWR('api/deals', fetcher);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      {data.detailDataProducts &&
        data.detailDataProducts.map((item: any) => (
          <div
            className="w-[250px] shadow-xl rounded-tl-[54px] rounded-lg overflow-hidden h-[400px] border p-3 cursor-pointer group group-hover:bg-purple-700 hover:scale-105 transition-all  flex flex-col justify-between hover:shadow-purple-700  hover:border-purple-300"
            key={item.id}
          >
            <Link href={`/deals/detail/${item.id}`}>
              <div className="overflow-hidden  rounded-tl-[54px]  rounded-md  ">
                <img
                  src={`${item.image}`}
                  alt=""
                  className="w-[250px] h-[250px] bg-cover"
                />
              </div>
              <div className="flex flex-col  gap-2 ">
                <h1 className="text-lg  truncate">{item.title}</h1>
                <h1 className="text-secondary text-xs">{item.author}</h1>
                <h1>
                  {item.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </h1>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export default CardDeals;

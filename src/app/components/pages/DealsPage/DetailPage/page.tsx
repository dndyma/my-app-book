'use client';

import { useState } from 'react';

function DetailPage(props: React.ReactNode) {
  const { data }: any = props;
  const { detailData } = data;
  const [count, setCount] = useState(0);
  const handlerCount = (on: any) => {
    if (on === '-') {
      if (count > 0) {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="flex shadow-xl w-[60%] mx-auto my-0 rounded-lg border p-9">
        <img src={`${detailData.image}`} alt="" />
        <div className="flex flex-col justify-between">
          <div>
            <h1>{detailData.title}</h1>
            <h3 className="text-xs text-secondary">{detailData.author}</h3>
          </div>
          <div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  handlerCount('-');
                }}
                className="p-2 rounded-lg bg-primary text-white"
              >
                -
              </button>
              <h1 className="flex items-center my-auto mx-0">{count}</h1>
              <button
                onClick={() => {
                  handlerCount('+');
                }}
                className="p-2 rounded-lg bg-primary text-white"
              >
                +
              </button>
              <button className="bg-primary text-white p-2 rounded-lg w-full">
                Buy
              </button>
            </div>
            <h1 className="text-[30px] mt-3">
              {detailData.price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;

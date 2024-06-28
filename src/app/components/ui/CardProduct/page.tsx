import { Roboto } from 'next/font/google';
import List from '../../common/List/page';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });
type cardtypage = {
  title: string;
  price: string;
  ifclick: string;
};
function CardPage(props: cardtypage) {
  const { title, price, ifclick }: any = props;
  return (
    <>
      <div className="hover:shadow-purple-800 shadow-2xl h-[400px] hover:scale-105 transition-all duration-200 transform cursor-pointer w-[300px] border group border-[#FAF9FA] rounded-xl p-5 hover:border-purple-700">
        <div className="flex flex-col justify-between h-full  hover:shadow-primary">
          <div>
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="text-secondary text-xs">
              Perfect for small side projects.
            </p>
            <div className="mt-7">
              <h1 className="text-3xl text-purple-700 font-bold">{price}</h1>
              <p className="text-secondary text-xs mb-5">per month</p>
              <button className="px-5 py-3 bg-[#F2F5F7] text-tertiary w-full rounded-full group-hover:bg-purple-700 group-hover:text-white transition delay-100">
                {ifclick}
              </button>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 group-hover:bg-primary transition delay-100" />
              </div>
            </div>
            <div>
              <h1 className="text-secondary">Includes : </h1>
              <ul className={`text-sm  mt-4 ${roboto.className} w-full`}>
                <List title="3k+ Ebooks" />
                <List title="10+ pages" />
                <List title="Free updates" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPage;

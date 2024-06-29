import { Inter, Roboto } from 'next/font/google';
import CardPage from '../../ui/CardProduct/page';
const inter = Inter({ subsets: ['latin'], weight: '500' });

function PricePage() {
  return (
    <div className={` ${inter.className}`}>
      <h1 className="text-center font-bold text-5xl mb-5">Flexible pricing</h1>
      <p className="text-secondary text-center">
        Our pricing is simple.Pay once , get free updates for life
      </p>
      <div className="flex justify-center mt-10">
        <div className="bg-[#F0F0F1] w-[109px] p-1 rounded-full cursor-pointer">
          <div className="bg-purple-700 text-white w-[100px] p-3 rounded-full text-center">
            Monthly
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex justify-around mt-16 mb-5">
        <CardPage title="Free" price="$0" ifclick="Get Started" />
        <CardPage title="Premium" price="$2,000" ifclick="Get Started" />
        <CardPage title="Pro" price="Custom" ifclick="Contact US" />
      </div>
    </div>
  );
}

export default PricePage;

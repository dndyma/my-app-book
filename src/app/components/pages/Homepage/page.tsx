import { Roboto, Inter } from 'next/font/google';
import Link from 'next/link';
const roboto = Roboto({ subsets: ['latin'], weight: ['500', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['500'] });
function Homepage() {
  return (
    <>
      <div className="flex mt-10 justify-between px-16">
        <div className="w-1/2 flex flex-col gap-7">
          <h1 className={`${roboto.className} text-7xl leading-[80px]`}>
            All your book{' '}
            <img src="/icon/star.png" className="inline w-10 h-10" /> collection
            in one platform{' '}
            <img src="/icon/book.png" alt="" className="inline w-10 h-10" />
          </h1>
          <h3 className="text-secondary w-[70%] text-[16px]">
            Our Collection will help your home looks better and we provide the
            best product for you
          </h3>
        </div>
        <div className="flex relative mr-[60px] px-7">
          <div className="bg-primary hover:bg-purple-700 transition-all w-[250px] h-[300px] relative rounded-md">
            <img
              src="/icon/star.png"
              alt=""
              className="absolute -left-16 top-2 inline w-8 h-8"
            />
            <Link href="https://shorturl.at/A6G9S">
              <img
                src="/imagenya.png"
                alt=""
                className="absolute -left-20 -bottom-10"
              />
            </Link>
            <img
              src="/icon/star.png"
              alt=""
              className="absolute -left-[340px] -bottom-10 inline w-8 h-8"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-between w-[33%]  px-7 ml-9">
        <button className="bg-primary hover:bg-purple-700 transition duration-300 text-white px-5 py-3 rounded-lg">
          Buy Books{' '}
          <img src="/icon/right.png" alt="" className="ml-5 inline h-10 w-10" />
        </button>
        <button className=" text-secondary flex justify-center items-center cursor-pointer group">
          <div className="rounded-full w-8 h-8 border-4 border-primary group-hover:border-purple-700 p-3 flex justify-center items-center mr-3 transition-all">
            <div className=" rounded-full border border-4 border-primary group-hover:border-purple-700 w-3 h-3 transition-all">
              <span className="text-transparent">_</span>
            </div>
          </div>
          Watch Video
        </button>
      </div>
      <div className={`flex w-full  mt-14 ${inter.className} px-7 ml-9`}>
        <div className="bg-yellow-400 rounded-xl  h-[60px] w-[4%] flex items-center justify-center">
          <img src="/icon/rating.png" alt="" className="inline h-5 w-5" />
        </div>
        <div className="ml-5">
          <h1 className="text-3xl ">Reviews</h1>
          <h3 className="text-secondary text-[13px]">More Than 10k+ readers</h3>
        </div>
      </div>
      <div className="flex mt-20">
        <div
          className={`flex flex-col justify-start  items-center w-[50%] rounded-r-lg h-[300px] bg-primary hover:bg-purple-700 text-white ${inter.className}`}
        >
          <div className="mx-auto my-0 h-full flex flex-col justify-center">
            <h3>Quote from Matt Ridley</h3>
            <p className="text-5xl font-bold mt-7">
              In order to succed , you <br />
              must read books!
            </p>
          </div>
        </div>
        <div className={`${roboto.className} mx-auto my-0`}>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-secondary">Week - 7/10</h1>
            <p className="text-5xl font-bold italic mt-8">
              Exploring the Why,
              <br />
              How and What?{' '}
              <img
                src="/icon/rightlong.png"
                alt=""
                className="inline w-10 h-10"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

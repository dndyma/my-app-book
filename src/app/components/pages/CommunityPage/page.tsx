function CommunityPage() {
  return (
    <div className="relative">
      <img src="/commu.jpg" alt="" className="brightness-50 bg-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-7xl text-white w-[80%]">
          Make Your Read More fun with The{' '}
          <span className="text-primary">Reading</span> Community.
        </h1>
        <button className="text-white bg-primary px-10 py-3  rounded-full mt-12">
          Join Community
        </button>
      </div>
    </div>
  );
}

export default CommunityPage;

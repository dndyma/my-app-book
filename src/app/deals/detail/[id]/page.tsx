import DetailPage from '@/app/components/pages/DealsPage/DetailPage/page';
import getData from '@/app/lib/getData/page';
const Detail = async (props: any) => {
  const { params }: any = props;
  const data = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/deals?id=` + params.id
  );
  console.log(data);
  return <DetailPage data={data} />;
};
export default Detail;

import DetailPage from '@/app/components/pages/DealsPage/DetailPage/page';
import getData from '@/lib/getData/page';
const Detail = async (props: any) => {
  const { params }: any = props;
  const data = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/deals?id=` + params.id
  );
  return <DetailPage data={data} />;
};
export default Detail;

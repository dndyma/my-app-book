import { retrieveData, retrieveDataById } from '@/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';
// const data = [
//   {
//     id: 1,
//     title: 'Javascript Beginner',
//     author: 'Thomas Thompson',
//     price: 284900,
//     image:
//       'https://static.periplus.com/gcdaOHDmVcnsdUp5czMB4waZ1i7yS612gmNiLx7tzDVBNF7I3uQxydGyIYaB9I2Rw--',
//     rating: {
//       rate: 4.5,
//     },
//   },
//   {
//     id: 2,
//     title: 'Bypass Javscript',
//     author: '7hmei',
//     price: 304900,
//     image:
//       'https://static.periplus.com/pLR3vElHtpgCB3Uo9_ufOLCojYMwGsfxfmHOzayYB1aW7WgO1C.sACbq.u0AFIZsg--',
//     rating: {
//       rate: 3.5,
//     },
//   },
//   {
//     id: 3,
//     title: 'Javascript Expert With Node JS',
//     author: 'George Hotz',
//     price: 237900,
//     image:
//       'https://static.periplus.com/o40_2wZRXv1GAsaIqEuUYaRnqjnYpdrgNTU9m.jTtBG9HZ.759H2aErn.R9aMLXUQ--',
//     rating: {
//       rate: 3.5,
//     },
//   },
// ];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const detailData = await retrieveDataById('product', id);
    if (detailData) {
      return NextResponse.json({ status: 200, message: 'Succes', detailData });
    }
    return NextResponse.json({ status: 404, message: 'Data not found' });
  }
  const detailDataProducts = await retrieveData('product');
  return NextResponse.json({
    status: 200,
    message: 'Succes',
    detailDataProducts,
  });
}

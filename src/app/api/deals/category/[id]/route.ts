import { retrieveDataByInput } from '@/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, props: any) {
  const { params } = props;
  const { id } = params;
  const detailDataProducts = await retrieveDataByInput({
    Category: id,
  });
  return NextResponse.json({
    status: 200,
    message: 'Succes',
    detailDataProducts,
  });
}

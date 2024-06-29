import { registerData } from '@/lib/firebase/service';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await registerData(data);
  return NextResponse.json(
    {
      status: result.status,
      message: result.message,
    },
    { status: result.statusCode }
  );
}

import { registerData } from '@/app/lib/firebase/service';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const result = await registerData(data);
  return NextResponse.json({ status: 200, message: 'Succes', result });
}

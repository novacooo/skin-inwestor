import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest) {
  const { searchParams } = new URL(request.url || '');
  const name = searchParams.get('name') || '';
  const encodedName = encodeURI(name);
  return NextResponse.json({ name });
}

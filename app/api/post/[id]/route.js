import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export function DELETE(request, { params }) {
  const id = params.id;
	const post = await prisma.post.delete({
		where: {id}
	})
  return NextResponse.json(request);
}

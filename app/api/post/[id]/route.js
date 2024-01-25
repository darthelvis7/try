import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export function DELETE(request, { params }) {
  const id = params.id;
	const post = await prisma.post.delete({
		where: {id}
	})
  return NextResponse.json(request);
}


// 80401a2e0f42af876f1a6805b17fca5289601f39

'use-server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const useCreateBlog = async (body:any) => {
    const newBlog = await prisma.blog.create({data:
        {...body
    } });

    revalidatePath('/blog');

    return newBlog;
}
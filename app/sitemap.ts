import { MetadataRoute } from 'next';

async function getPostList() {
  const postList = await (await fetch('https://api.ikhyeons.net/community/list/sitemap', { method: 'GET' })).json();
  return postList;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getPostList();
  let arr = [
    {
      url: 'https://blog.ikhyeons.net/',
      lastModified: new Date(),
    },
    {
      url: 'https://blog.ikhyeons.net/resume',
      lastModified: new Date(),
    },
    {
      url: 'https://blog.ikhyeons.net/user',
      lastModified: new Date(),
    },
  ];
  postList.documentList.map((data: any) => {
    arr.push({
      url: `https://blog.ikhyeons.net/view/${data.id}`,
      lastModified: new Date(),
    });
  });

  return arr;
}

import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, getNotes, SITE } from '../lib';

export async function GET(context: APIContext) {
  const posts = (await getPosts()).map((p) => ({
    title: p.data.title, pubDate: p.data.date, description: p.data.description, link: `/blog/${p.id}/`,
  }));
  const notes = (await getNotes()).map((n) => ({
    title: (n.body ?? '').trim().split('\n')[0].slice(0, 40), pubDate: n.data.date, link: `/notes/#${n.id}`,
  }));
  return rss({
    title: SITE.title,
    description: '개발하며 생각한 것들을 적습니다.',
    site: context.site!,
    items: [...posts, ...notes].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}

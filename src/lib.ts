import { getCollection } from 'astro:content';

export const SITE = { title: 'milo-joon', author: '이현준' };

const byDate = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export const getPosts = async () =>
  (await getCollection('blog', (e) => !e.data.draft)).sort(byDate);

export const getNotes = async () =>
  (await getCollection('notes', (e) => !e.data.draft)).sort(byDate);

export const fmt = (d: Date) =>
  d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Seoul' });

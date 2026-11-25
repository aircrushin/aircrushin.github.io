import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export function isPublished(post: BlogPost, includeDrafts = !import.meta.env.PROD) {
	return includeDrafts || post.data.draft !== true;
}

export async function getPublishedPosts() {
	const posts = await getCollection('blog', (post) => isPublished(post));
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getAllTags(posts: BlogPost[]) {
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}
	return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'));
}

import rss from '@astrojs/rss';
import { NUMBER_OF_POSTS_PER_PAGE } from '@/server-constants'
import {
  getPosts,
  getRankedPosts,
  getAllTags,
} from '@/lib/notion/client.ts'

const [posts, rankedPosts, tags ] = await Promise.all([
  getPosts(NUMBER_OF_POSTS_PER_PAGE),
  getRankedPosts(),
  getAllTags(),
])
export function GET(context) {

  return rss({
    // `<title>` field in output xml
    title: 'Buzz’s Blog',
    // `<description>` field in output xml
    description: 'A humble Astronaut’s guide to the stars',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    posts, rankedPosts, tags,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
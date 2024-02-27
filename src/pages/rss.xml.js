import rss from '@astrojs/rss';
// import { NUMBER_OF_POSTS_PER_PAGE } from '@/server-constants'
// import {
//   getPosts
// } from '@/lib/notion/client.ts'

// const [posts ] = await Promise.all([
//   getPosts(NUMBER_OF_POSTS_PER_PAGE),
// ])

export function GET(context) {

  return rss({
    // `<title>` field in output xml
    title: 'Mohib Blog',
    // `<description>` field in output xml
    description: 'All the latest blogs on Tech and Software development',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    // items : posts.map(post => ({
    //     title : post.title,
    //     link : `https://mohib.pages.dev/blog/${post.Slug}`,
    //     pubDate : post.date,
    //     content: post.excerpt,
    //     categories: post.Tags.map(tag => tag.name),
    //     author: "Muhabbat Ali"
    //     // date: post.date,
    //     // excerpt: post.Excerpt,
    //     // tags : post.Tags.map(tag => ({
    //     //     name: tag.name
    //     // }))
    // })),
    items: [],

    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
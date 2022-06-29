# The Archive by hloth

[Ридми на русском](./README.md)

What would you do, if major tech company terminated your account without any reason or warning and destroyed all your data, gradually collected for seven years?

[Read in blog (coming soon) &rarr;](#)

## Motivation

The idea to create an archive came to me even before YouTube destroyed my account, but the obvious need for it appeared only on April 25, 2022.

The Archive contains video files from my deleted YouTube channel, photos from my Instagram, Twitter tweets, GitHub repositories, posts from Reddit. Also I'm going to publish any other content I create in The Archive.

By creating The Archive website, I transferred the rights on my content to myself. Even if I lose all the accounts in the social networks, I will have a centralized (ironically) source of data. While the files are actually stored on my hosting, which could delete my virtual server, they are also stored in my backups that I make regulary.

What will happen if my domain is taken from me? This is conspiracy, it is obvious that there is no[ ](https://github.com/arasfon)hater that following me and deleting all my accounts, but anyway I decided to make this website Tor Hidden Service at [archive.hlothadmob6vsssnjd7ovwyz4z2le4pbpbyfhqbuwooyq62ona3l4bid.onion](http://archive.hlothadmob6vsssnjd7ovwyz4z2le4pbpbyfhqbuwooyq62ona3l4bid.onion)

## Development

The site is made on Next.js (React) without databases and backend. For video files CDN I have choosen Imagekit. They doesn't have access to the files directly, their servers are used as proxy server with a cache shield to optimize traffic consumption on my hosting.

The site is completely translated into two languages ​​(Russian and English), except for content itself.

The site supports all modern browsers, all videos were transcoded to AVC h264 to support the most number of devices and OS possible.

### YouTube

Data collection were done in the spring of 2022 by open sources. According to various web resources, using automated parsing and manual search, excel table with all possible data was compiled.

At the moment, the following data are collected (not for all videos):

- Name
- Description
- Thumbnail (mainly generated from the frames of the video, the rest are obtained from Yandex search, Google search deleted anything related to me)
- Video file or note why there is no file or how to restore video
- Likes
- Dislikes
- Comments
- Likes to comments
- Names of comments authors
- Replies to comments
- Dates of comments

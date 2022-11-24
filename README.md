# Bookmark Site Builder

The mission is to build an entire site from a sub folder in your Brave bookmarks

### The builder allows for:

- custom named links/pages
- custom timestamps and sorting
- custom tags
- screen shots of the page stored into s3 by date
  - allow multiple to show site changes

### Later:

- a management of tags and some other stuff that alters into the bookmarks file
- Site puzzler that allows for people to make their own news cases with citations

### Architecture:

- The server side is based off sqlite so the db can be a file that can be committed to the repo. Also, speed and high performance isn't needed because the site is static rendered. It's based off another of my base project here: https://github.com/dsmurl/node-sqlite-sample

### Progress

- added tsoa rest end points
- added sqlite3 support
- todo: add prisma support for async await

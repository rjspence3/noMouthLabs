# Publishing

One markdown file per project or post. Push, and the site rebuilds every page,
the projects index, the Lab list, the RSS feed, the sitemap and llms.txt from
these files. Files starting with `_` are templates and are never published.

- New project: copy `projects/_template.md` to `projects/<slug>.md`. The slug
  becomes the URL: `/projects/<slug>`.
- New post: copy `writing/_template.md` to `writing/<slug>.md`. Its `projects`
  list links it from those project pages automatically.
- Ship something: add one line to the project's `## Ship log`. That line also
  becomes the page's "last updated" date and moves it up the index.

The build fails, naming the file, when a required field is missing or a ship
log line isn't `- YYYY-MM-DD: note`. A `page: full` project needs a live link
or a dated ship log; anything with neither goes on the Lab with `page: lab`.

import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";
import og_images from "lume/plugins/og_images.ts";
import picture from "lume/plugins/picture.ts";
import reading_info from "lume/plugins/reading_info.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import transform_images from "lume/plugins/transform_images.ts";
import date from "lume/plugins/date.ts";
import { sv } from "npm:date-fns/locale/sv";

const site = lume();

site.add([".css", ".woff2"]);
site.add("/img");

site.use(esbuild());
site.use(lightningcss());
site.use(slugify_urls());
site.use(og_images());
site.use(picture());
site.use(transform_images());
site.use(metas());
site.use(inline());
site.use(date({
  locales: { sv },
}));
site.use(minify_html());
site.use(nav());
site.use(reading_info());
site.use(relativeUrls());
site.use(resolve_urls());
site.use(robots());
site.use(sitemap());

export default site;

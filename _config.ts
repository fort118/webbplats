import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nav from "lume/plugins/nav.ts";
import og_images from "lume/plugins/og_images.ts";
import pagefind from "lume/plugins/pagefind.ts";
import picture from "lume/plugins/picture.ts";
import reading_info from "lume/plugins/reading_info.ts";
import relations from "lume/plugins/relations.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import transform_images from "lume/plugins/transform_images.ts";

const site = lume();

site.use(esbuild());
site.use(inline({
    extensions: [ ".css" ]
}));
site.use(lightningcss());
site.use(metas());
site.use(minify_html());
site.use(multilanguage());
site.use(nav());
site.use(og_images());
site.use(pagefind());
site.use(picture());
site.use(reading_info());
site.use(relations());
site.use(relativeUrls());
site.use(resolve_urls());
site.use(robots());
site.use(sitemap());
site.use(slugify_urls());
site.use(transform_images({
    extensions: [".jpg"]
}));

site.copy("/styles.css");
site.copy("/logo.svg");

export default site;

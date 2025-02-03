
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
    title: "SunshineNotes",
    description: "Record the difficulties and steps encountered in self-learning technology",
    author: "Sunshine AI",
    logo: "/images/icons/logo.svg",
    domain: "https://SunshineNotes.app",
    navbarTitle: {
      logo: "/images/icons/logo.svg",
      text: "朝阳笔记SunshineNotes",
      version: "Stable"
    },
    // editLinkRoot:
    //   "https://github.com/datopian/SunshineNotes-app/edit/main",
    showEditLink: true,
    showToc: true,
    showSidebar: true,
    showComments: true,
    comments: {
      provider: "giscus", // supported providers: giscus, utterances, disqus
      pages: ["blog"], // page directories where we want commments
      config: {
        repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
        repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
        category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
        categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      },
    },
    analytics: "",
    navLinks: [
      { href: "/", name: "主页" },
      { href: "/articles", name: "文章" },
      { href: "/programming", name: "编程相关" },
      { href: "/travel", name: "旅行日记" },
      { href: "/notes", name: "小记" },
      { href: "/about", name: "关于本站" },
      { href: "/_all", name: "所有标签" },
    ],
    social: [
      { label: "github", href: "https://github.com/SunshineAI0523" },
    ],
    search: {
      provider: "algolia",
      config: {
        appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
        apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
        indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
      },
    },
    nextSeo: {
      titleTemplate: "%s | SunshineAI",
      description:
        "Record the difficulties and steps encountered in self-learning technology",
      canonical: "https://github.com/SunshineAI0523",
      // openGraph: {
      //   title: "SunshineNotes",
      //   images: [
      //     {
      //       url: "https://SunshineNotes.app/assets/images/frontpage-screenshot.jpg",
      //       alt: "SunshineNotes",
      //       width: 1200,
      //       height: 627,
      //       type: "image/jpg",
      //     },
      //   ],
      // },
      // twitter: {
      //   handle: "@SunshineNotes",
      //   site: "https://SunshineNotes.app",
      //   cardType: "summary_large_image",
      // },
    },
  };
  
export default config;



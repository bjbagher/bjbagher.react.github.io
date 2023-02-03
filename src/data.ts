const data =  [
    {
        "imgSrc": "/assets/astro-image.webp",
        "altText": "astro logo",
        "mdSrc": () => import("./blog/first-post.md"),
        "date": "Jan 15, 2023",
        "title": "Error: getaddrinfo ENOTFOUND localhost"
    },
    {
        "imgSrc": "/assets/gh_actions.webp",
        "altText": "gh actions",
        "mdSrc": () => import("./blog/second-post.md"),
        "date": "Jan 8, 2023",
        "title": "Run Prettier on Github Actions"
    }
]

export default data;
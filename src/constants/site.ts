export type NavigationItem = {
    name: string;
    path: string;
};

export const SITE = {
    name: "Frederick Chen",
    title: "Student / Developer / Blogger",
    description: "Hello, I'm a student based in China. I'm interested in web development, programming, and writing. I like to learn new things and share my knowledge with others.",
    url: "https://fredcss.dev",
    defaultImage: "/default-og-image.jpg",
    sections: {
        // 删除 experience 相关内容
        // experience: {
        //     title: "Experience",
        //     viewAllText: "View full résumé",
        // },
    },
} as const;

export const NAVIGATION: {
    main: NavigationItem[];
} = {
    main: [
        { name: "Home", path: "/" },
        { name: "Notes", path: "/notes" },
        { name: "Bookmarks", path: "/bookmarks" }
    ],
} as const;

export const CONTENT = {
    postsPerPage: 10,
    recentPostsLimit: 3,
    featuredProjectsLimit: 3,
} as const;

// 删除 experience 相关内容
// export const META = {
//     openGraph: {
//         type: "website",
//         locale: "en_US",
//     },
//     twitter: {
//         cardType: "summary_large_image",
//     }
// } as const;
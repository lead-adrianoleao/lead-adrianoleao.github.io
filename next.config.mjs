import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
    images: {
        domains: ["lead-adrianoleao.github.io"]
    }
    
};

export default withContentlayer(nextConfig);

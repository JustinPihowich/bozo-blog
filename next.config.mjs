import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
})({
  ...nextConfig, 
});

export default mdxConfig;

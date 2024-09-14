import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})(nextConfig);

export default withMDXConfig;

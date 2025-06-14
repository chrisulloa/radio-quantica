import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['ssh2-promise', 'ssh2'],
};

export default withPayload(nextConfig, { devBundleServerPackages: false });

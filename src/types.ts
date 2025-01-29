import type { components } from '@octokit/openapi-types';

export interface DownloadLink {
  os: string;
  name: string;
  url: string;
  isPrimary?: boolean;
}

export interface DownloadLinks {
  primary: DownloadLink[];
  alt: DownloadLink[];
}

export interface HeroData {
  downloadLinks: DownloadLinks;
  version: string;
  releaseDate: string;
}

export interface RepoStats {
  forks: string;
  stars: string;
  latestReleaseName: string | null;
}

export interface IconDetails {
  name: string;
  link: string;
  color?: string;
  svg: string;
}

// GitHub API types
export type ReleaseAsset = components['schemas']['release-asset'];

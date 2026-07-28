export const siteMetadata = {
  title: 'Gitify',
  url: 'https://gitify.io',
  description: 'Git notifications on your menu bar',
  repo: {
    fullName: 'gitify-app/gitify',
    owner: 'gitify-app',
    name: 'gitify',
  },
  author: {
    name: 'Gitify Team',
    site: 'https://github.com/orgs/gitify-app/people',
  },
  keywords:
    'gitify,desktop,application,github,gitea,codeberg,forgejo,bitbucket,notifications,unread,menu bar,electron,open source,mac,windows,linux',
  google: {
    gtags: ['G-QXML81DEDV', 'G-H4MTPZP3HW'],
    siteVerification: 'jJNnPZ2wu7F1tlSab57og1N3RNrMqhzTCzRrbztY8WU',
  },
  menuLinks: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'FAQ',
      path: '/faq/',
    },
  ],
};

export const URLs = {
  GITHUB: {
    REPO: `https://github.com/${siteMetadata.repo.fullName}`,
    LATEST_RELEASE: `https://github.com/${siteMetadata.repo.fullName}/releases/latest`,
    ISSUES: `https://github.com/${siteMetadata.repo.fullName}/issues`,
  },
  HOMEBREW: 'https://formulae.brew.sh/cask/gitify',
};

export const gitProviders = [
  {
    name: 'GitHub',
    note: 'Cloud & Enterprise',
    icon: 'simple-icons:github',
  },
  {
    name: 'Gitea',
    icon: 'simple-icons:gitea',
  },
  {
    name: 'Forgejo',
    icon: 'simple-icons:forgejo',
  },
  {
    name: 'Codeberg',
    icon: 'simple-icons:codeberg',
  },
  {
    name: 'Bitbucket',
    icon: 'simple-icons:bitbucket',
  },
];

import { Octokit } from 'octokit';

const REQUEST_TIMEOUT_MS = 8000;

/** Only the GitHub REST API may be contacted at build time. */
const ALLOWED_HOSTS = new Set(['api.github.com']);

const resolveUrl = (input: RequestInfo | URL): string => {
  if (typeof input === 'string') {
    return input;
  }
  return input instanceof URL ? input.href : input.url;
};

/**
 * Fetch wrapper that allowlists outbound hosts and aborts slow requests,
 * so build-time data fetching can never hang the dev server or a build.
 */
const fetchWithTimeout: typeof fetch = (input, init) => {
  let url: URL;
  try {
    url = new URL(resolveUrl(input));
  } catch {
    throw new Error('Invalid request URL');
  }
  if (!ALLOWED_HOSTS.has(url.hostname)) {
    throw new Error(
      `Blocked outbound request to unexpected host: ${url.hostname}`,
    );
  }
  return fetch(url, {
    ...init,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
};

/**
 * Shared Octokit client for build-time GitHub API calls.
 *
 * Fails fast on rate limits instead of waiting out the reset window;
 * callers are expected to catch and fall back gracefully.
 */
export const octokit = new Octokit({
  request: {
    fetch: fetchWithTimeout,
  },
  throttle: {
    onRateLimit: () => false,
    onSecondaryRateLimit: () => false,
  },
});

/**
 * Runtime configuration for the standalone build.
 *
 * Keep environment-specific values here. If the package is hosted under the
 * original Wonder Lab domain, the relative endpoint continues to use the
 * existing submission API. Set it to an absolute URL when hosting elsewhere.
 */
export const config = {
  submissionEndpoint: "/api/submissions",
};

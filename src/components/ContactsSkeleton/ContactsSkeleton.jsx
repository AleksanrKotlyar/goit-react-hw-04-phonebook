import ContentLoader from 'react-content-loader';

export const ContactsSkeleton = props => (
  <ContentLoader
    width={400}
    height={70}
    viewBox="0 0 400 70"
    backgroundColor="#1f55463d"
  >
    <rect x="5" y="5" rx="4" ry="4" width="355" height="24" />
    <rect x="5" y="35" rx="4" ry="4" width="355" height="24" />
  </ContentLoader>
);

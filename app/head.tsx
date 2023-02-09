import DefaultMetaTags from '@components/DefaultMetaTags';

export default async function Head({ params }) {
  const title = 'Filecoin Web Services';
  const description = 'A roadmap for the future of Filecoin Web Services, a future alternative to AWS, Azure, and GCP';
  const url = 'https://fw.services';

  return (
    <>
      <title>{title}</title>
      <DefaultMetaTags />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://next-s3-public.s3.us-west-2.amazonaws.com/social/fws.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://next-s3-public.s3.us-west-2.amazonaws.com/social/fws.png" />
    </>
  );
}

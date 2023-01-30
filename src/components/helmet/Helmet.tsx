import { Helmet } from 'react-helmet-async';

interface MetaTitleProps {
  title?: string;
  description?: string;
}

export const MetaTitle = ({ title = '', description = '' }: MetaTitleProps = {}) => {
  return (
    <Helmet
      title={title ? `${title}` : undefined}
      defaultTitle="Personal blog | Kirill Polozenko"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

import { Helmet } from 'react-helmet';

const CommonHelmet = ({ title, keywords, desc }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={desc} />
        </Helmet>
    );
};

export default CommonHelmet;

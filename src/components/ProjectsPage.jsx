import { Typography, Box, Container, Grid, Divider, Tooltip, IconButton } from '@mui/material';
import Layout from './Layout';
import fullProjectList from './FullProjectList';
import { JavascriptOriginal, TypescriptOriginal, CplusplusOriginal, GoOriginal } from 'devicons-react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const monthToText = (month) => {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month] || 'Unknown';
};

const ToolTipIcon = ({ title, icon }) => (
    <Tooltip title={title}>
        <IconButton size="large">{icon}</IconButton>
    </Tooltip>
);

const LangIcon = ({ lang }) => {
    switch (lang) {
        case 'JavaScript':
            return <ToolTipIcon title="JavaScript" icon={<JavascriptOriginal size="24" />} />;
        case 'TypeScript':
            return <ToolTipIcon title="TypeScript" icon={<TypescriptOriginal size="24" />} />;
        case 'C++':
            return <ToolTipIcon title="C++" icon={<CplusplusOriginal size="24" />} />;
        case 'Go':
            return <ToolTipIcon title="Go" icon={<GoOriginal size="24" />} />;
        default:
            return <ToolTipIcon title="Unknown" icon={<QuestionMarkIcon size="24" />} />;
    }
};

const Project = ({ data }) => {
    let childrens = null;
    if (data.children !== null) {
        const childProjects = data.children.map((child, idx) => (
            <Box key={child.id}>
                <Project data={child} />
                {idx !== data.children.length - 1 && <Divider />}
            </Box>
        ));
        childrens = (
            <>
                <Typography variant={data.type}>{data.label}</Typography>
                {childProjects}
            </>
        );
    } else {
        let time = 'Unknown';
        if (data.time.length === 4) {
            time = `${monthToText(data.time[1])} ${data.time[0]} - ${monthToText(data.time[3])} ${data.time[2]}`;
        } else if (data.time.length === 2) {
            time = `${monthToText(data.time[1])} ${data.time[0]}`;
        }
        let langs = data.lang.map((lang) => <LangIcon lang={lang} key={data.id + lang} />);
        childrens = (
            <>
                <Typography variant={data.type}>
                    {data.label} {langs}
                </Typography>
                <Typography>{time}</Typography>
                <Typography>{data.desc}</Typography>
                <Typography>Technology: </Typography>
            </>
        );
    }
    return (
        <Box id={data.id} sx={{ marginY: '10px' }}>
            {childrens}
        </Box>
    );
};

const ProjectsPage = () => {
    const listOfProjects = fullProjectList.map((project, idx) => (
        <Box sx={{ marginY: '30px' }} id={project.id} key={project.id}>
            <Project data={project} />
            {idx !== fullProjectList.length - 1 && <Divider />}
        </Box>
    ));
    return (
        <Layout>
            <Container>
                <Grid container>
                    <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'grid' } }}>
                        Left
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {listOfProjects}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ProjectsPage;

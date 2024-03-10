import { Typography, Box, Container, Grid, Divider, Tooltip, IconButton, Chip } from '@mui/material';
import Layout from './Layout';
import fullProjectList from './FullProjectList';
import {
    JavascriptOriginal,
    TypescriptOriginal,
    CplusplusOriginal,
    GoOriginal,
    JavaOriginal,
    COriginal,
    PythonOriginalWordmark,
    ScalaOriginal,
    LatexOriginal,
    ReactOriginalWordmark,
    VuejsOriginalWordmark,
    FastapiOriginal,
    MysqlOriginalWordmark,
    MongodbOriginalWordmark,
    NextjsOriginalWordmark,
    DjangoPlainWordmark,
} from 'devicons-react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { TreeView, TreeItem } from '@mui/lab';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import FlashIcon from '../assets/adobe-flash.png';
import CommonHelmet from './CommonHelmet';
import { Link } from 'react-router-dom';

const monthToText = (month) => {
    //return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month] || 'Unknown';
    return month + 1;
};

const ToolTipIcon = ({ title, icon }) => (
    <Tooltip title={title}>
        <IconButton size="large" sx={{ backgroundColor: '#ffffff', marginX: '4px' }}>
            {icon}
        </IconButton>
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
        case 'Python':
            return <ToolTipIcon title="Python" icon={<PythonOriginalWordmark size="24" />} />;
        case 'Go':
            return <ToolTipIcon title="Go" icon={<GoOriginal size="24" />} />;
        case 'Java':
            return <ToolTipIcon title="Java" icon={<JavaOriginal size="24" />} />;
        case 'ActionScript':
            return <ToolTipIcon title="Flash/ActionScript" icon={<img src={FlashIcon} width="24" alt="Flash" />} />;
        case 'C':
            return <ToolTipIcon title="C" icon={<COriginal size="24" />} />;
        case 'Scala':
            return <ToolTipIcon title="Scala" icon={<ScalaOriginal size="24" />} />;
        case 'LaTeX':
            return <ToolTipIcon title="LaTeX" icon={<LatexOriginal size="24" />} />;
        case 'React':
            return <ToolTipIcon title="React" icon={<ReactOriginalWordmark size="24" />} />;
        case 'Vue':
            return <ToolTipIcon title="Vue" icon={<VuejsOriginalWordmark size="24" />} />;
        case 'FastAPI':
            return <ToolTipIcon title="FastAPI" icon={<FastapiOriginal size="24" />} />;
        case 'MySQL':
            return <ToolTipIcon title="MySQL" icon={<MysqlOriginalWordmark size="24" />} />;
        case 'MongoDB':
            return <ToolTipIcon title="MongoDB" icon={<MongodbOriginalWordmark size="24" />} />;
        case 'NextJS':
            return <ToolTipIcon title="NextJS" icon={<NextjsOriginalWordmark size="24" />} />;
        case 'Django':
            return <ToolTipIcon title="Django" icon={<DjangoPlainWordmark size="24" />} />;
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
                {data.desc && <Typography>{data.desc}</Typography>}
                {childProjects}
            </>
        );
    } else {
        let time = 'Unknown';
        if (data.time.length === 4) {
            time = `${monthToText(data.time[1])}/${data.time[0]} - ${monthToText(data.time[3])}/${data.time[2]}`;
        } else if (data.time.length === 3) {
            time = `${monthToText(data.time[1])}/${data.time[0]} - Present`;
        } else if (data.time.length === 2) {
            time = `${monthToText(data.time[1])}/${data.time[0]}`;
        }
        let langs = data.lang.map((lang) => <LangIcon lang={lang} key={data.id + lang} />);
        let techs = data.tech.map((tech) => (
            <Chip key={data.id + tech} label={tech} variant="outlined" sx={{ margin: '2px' }} />
        ));
        childrens = (
            <>
                <Typography variant={data.type}>
                    {data.label} {langs}
                </Typography>
                <Typography>{time}</Typography>
                <Typography>{data.desc}</Typography>
                <Typography>{techs}</Typography>
                {data.link && (
                    <Typography>
                        Related Links:{' '}
                        <Link to={data.link} target="_blank">
                            {data.link}
                        </Link>
                    </Typography>
                )}
            </>
        );
    }
    return (
        <Box id={data.id} sx={{ marginY: '10px' }} className={'highlight-transition'}>
            {childrens}
        </Box>
    );
};

const ProjectTreeItem = ({ data }) => {
    if (data.children !== null) {
        return (
            <TreeItem nodeId={data.id} label={data.label}>
                {data.children.map((child) => (
                    <ProjectTreeItem data={child} key={child.id} />
                ))}
            </TreeItem>
        );
    } else {
        return <TreeItem nodeId={data.id} label={data.label} />;
    }
};

const ProjectIndexTree = () => {
    const projectTreeItems = fullProjectList.map((project) => <ProjectTreeItem data={project} key={project.id} />);
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
            defaultExpanded={['professional', 'personal', 'academic']}
            sx={{ height: '100%', flexGrow: 1, overflowY: 'auto' }}
            onNodeSelect={(_, value) => {
                const em = document.getElementById(value);
                em.scrollIntoView({
                    behavior: 'instant',
                });
                em.classList.add('highlight-background');
                setTimeout(() => em.classList.remove('highlight-background'), 400);
            }}
        >
            {projectTreeItems}
        </TreeView>
    );
};

const ProjectsPage = () => {
    const listOfProjects = fullProjectList.map((project, idx) => (
        <Box sx={{ marginY: '30px' }} id={project.id} key={project.id}>
            <Project data={project} />
            {idx !== fullProjectList.length - 1 && <Divider />}
        </Box>
    ));
    const pageKeywords = 'jimmy, wang, personal website, projects, software engineer';
    const pageDesc = "Jimmy Wang's personal website : Projects";
    return (
        <Layout>
            <CommonHelmet title={'Projects'} keywords={pageKeywords} desc={pageDesc} />
            <Container sx={{ marginY: 2 }}>
                <Grid container>
                    <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'grid' } }}>
                        <ProjectIndexTree />
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ height: '75vh', overflow: 'auto' }}>
                        {listOfProjects}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ProjectsPage;

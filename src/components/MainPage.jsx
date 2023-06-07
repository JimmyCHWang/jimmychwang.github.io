import { Grid, Box, Typography, Container, Stack, Button, Link } from '@mui/material';
import Layout from './Layout';

import profile from '../assets/profile.jpg';

import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import CommonHelmet from './CommonHelmet';

const IconList = () => {
    const items = [
        {
            label: 'Resume',
            link: 'https://app.box.com/s/6t18t9nhoa2d9jgv5qmd4lqmv4b4fms5',
            icon: <ArticleIcon />,
            color: 'warning',
        },
        {
            label: 'GitHub',
            link: 'https://github.com/JimmyCHWang',
            icon: <GitHubIcon />,
            color: '',
        },
        {
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jimmychwang/',
            icon: <LinkedInIcon />,
            color: '',
        },
    ];
    const itemList = items.map((item) => (
        <Button href={item.link} startIcon={item.icon} key={item.label}>
            {item.label}
        </Button>
    ));
    return (
        <Stack direction="row" spacing={2}>
            {itemList}
        </Stack>
    );
};

const MainPage = () => {
    const pageKeywords = 'jimmy, wang, personal website, introduction, bio, software engineer';
    const pageDesc = "Jimmy Wang's personal website : Biography";
    return (
        <Layout>
            <CommonHelmet title={'Homepage'} keywords={pageKeywords} desc={pageDesc} />
            <Container sx={{ marginTop: { xs: 0, md: 2 } }}>
                <Grid container sx={{ textAlign: 'center', py: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={profile}
                            sx={{ height: 200, width: 200, borderRadius: 9999 }}
                            alt={'head shot'}
                        />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        alignItems={'center'}
                        direction={'column'}
                        justifyContent={'center'}
                    >
                        <Grid item>
                            <Typography variant="h3">Jimmy Wang</Typography>
                        </Grid>
                        <Grid item>
                            <Box mt={3}>
                                <Typography variant="h5">Fullstack Engineer</Typography>
                                <Typography variant="h5">Santa Clara, CA</Typography>
                                <Typography variant="h5">
                                    <u>
                                        <strong>Seeking SWE positions!</strong>
                                    </u>
                                </Typography>
                                <Typography mt={2}>
                                    M.S.,{' '}
                                    <Link href="https://ece.cmu.edu">
                                        Electrical and Computer Engineering, Carnegie Mellon University
                                    </Link>
                                </Typography>
                                <Typography>
                                    B.S.,{' '}
                                    <Link href="https://engineering.ucsc.edu">
                                        Computer Science, University of California, Santa Cruz
                                    </Link>
                                </Typography>
                                <Typography>
                                    B.A.,{' '}
                                    <Link href="https://engineering.ucsc.edu">
                                        Network and Digital Technology, University of California, Santa Cruz
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <IconList />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="md" sx={{ textAlign: 'left' }}>
                <Typography>
                    {`I am a software engineer with a passion for fullstack development, specializing in front-end technologies using React and Vue frameworks. `}
                </Typography>
                <Typography mt={2}>
                    {`Ever since I was 9 years old, coding has been an integral part of my life, igniting my curiosity and driving me to continuously expand my skills. I possess a keen aptitude for puzzle-solving, `}
                    {`which has greatly contributed to my problem-solving abilities in the realm of programming.`}
                </Typography>
                <Typography mt={2}>
                    {`As part of my professional journey, I had the privilege of being a member of "T34 Studio", where I took on the role of a programmer for our latest game, `}
                    <Link href="https://store.steampowered.com/app/1932830/The_Hexad_TrialsNings_Wing_3">
                        {"Ning's Wing 3: The Hexad Trials"}
                    </Link>
                    {`. I find great satisfaction in leveraging my expertise to craft immersive and engaging experiences for users.`}
                </Typography>
            </Container>
        </Layout>
    );
};

export default MainPage;

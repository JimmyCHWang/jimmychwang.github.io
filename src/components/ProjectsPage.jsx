import { Typography, Container, Grid } from '@mui/material';
import Layout from './Layout';

const ProjectsPage = () => {
    return (
        <Layout>
            <Container>
                <Grid container>
                    <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'grid' } }}>
                        Left
                    </Grid>
                    <Grid item xs={12} md={8}>
                        Right
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ProjectsPage;

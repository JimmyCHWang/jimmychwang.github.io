import { Grid, Box, Typography, Container } from '@mui/material';
import Layout from './Layout';

import profile from '../assets/profile.jpg';

const MainPage = () => {
    return (
        <Layout>
            <Container>
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
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default MainPage;

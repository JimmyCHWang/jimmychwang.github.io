import { Box, Button, Typography, Container, Grid, Chip, CircularProgress, Switch } from '@mui/material';
import Layout from './Layout';

import courseList from './CourseList';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid';
import { useState } from 'react';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', marginY: '8px' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" sx={props.textsx}>
                    {props.text}
                </Typography>
            </Box>
        </Box>
    );
}

const AcademicsPage = () => {
    const [detailed, setDetailed] = useState(false);
    const termToText = (term) =>
        ({
            0: '',
            1: 'Winter',
            2: 'Spring',
            3: 'Summer',
            4: 'Fall',
        }[term]);
    const simplifiedColumns = [
        {
            field: 'term',
            headerName: 'Term',
            description: 'School Term',
            sortable: false,
            width: 110,
            valueGetter: (params) => `20${params.row.year} ${termToText(params.row.term)}`,
        },
        {
            field: 'course_name',
            headerName: 'Name',
            description: 'Course Name',
            sortable: false,
            width: 300,
        },
        {
            field: 'institution',
            headerName: 'Institution',
            width: 100,
        },
        {
            field: 'grade',
            headerName: 'Grade',
            width: 60,
        },
        {
            field: 'technology',
            headerName: 'Technologies',
            description: 'List of technologies used in the course',
            width: 350,
            sortable: false,
            renderCell: (param) => {
                const techString = param.row.technology;
                const splitString = techString.split('|');
                const keyPrefix = param.row.course_dept + param.row.course_id;
                const chips = splitString.map((s) => <Chip key={keyPrefix + s} label={s} variant="outlined" />);
                return (
                    <Box
                        sx={{
                            minHeight: '52px',
                            py: '4px',
                            width: 350,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }}
                    >
                        {chips}
                    </Box>
                );
            },
        },
    ];
    const columns = [
        {
            field: 'term',
            headerName: 'Term',
            description: 'School Term',
            sortable: false,
            width: 100,
            valueGetter: (params) => `20${params.row.year} ${termToText(params.row.term)}`,
        },
        {
            field: 'course_dept',
            headerName: 'Dept',
            description: 'Department',
            sortable: false,
            width: 70,
        },
        {
            field: 'course_id',
            headerName: 'CRS #',
            description: 'Course ID / Course Number',
            sortable: false,
            width: 80,
        },
        {
            field: 'course_name',
            headerName: 'Name',
            description: 'Course Name',
            sortable: false,
            width: 300,
        },
        {
            field: 'institution',
            headerName: 'Institution',
            width: 100,
        },
        {
            field: 'units',
            headerName: 'Units',
            width: 60,
        },
        {
            field: 'grade',
            headerName: 'Grade',
            width: 60,
        },
        {
            field: 'technology',
            headerName: 'Technologies',
            description: 'List of technologies used in the course',
            width: 350,
            sortable: false,
            renderCell: (param) => {
                const techString = param.row.technology;
                const splitString = techString.split('|');
                const keyPrefix = param.row.course_dept + param.row.course_id;
                const chips = splitString.map((s) => <Chip key={keyPrefix + s} label={s} variant="outlined" />);
                return (
                    <Box
                        sx={{
                            minHeight: '52px',
                            py: '4px',
                            width: 350,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }}
                    >
                        {chips}
                    </Box>
                );
            },
        },
        {
            field: 'notes',
            headerName: 'Notes / Remarks',
            width: 250,
            sortable: false,
            filterable: false,
        },
        {
            field: 'related_link',
            headerName: 'Link',
            sortable: false,
            filterable: false,
            renderCell: (param) => {
                const myLink = param.row.related_link;
                if (myLink !== null) {
                    return (
                        <Button href={myLink} target="_blank">
                            Link
                        </Button>
                    );
                }
                return <></>;
            },
        },
    ];
    const useColumn = detailed ? columns : simplifiedColumns;
    const toggleDetailed = () => {
        setDetailed((detailed) => !detailed);
    };
    const customToolbar = () => (
        <GridToolbarContainer>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                <Typography>Simplified</Typography>
                <Switch checked={detailed} color="default" onChange={toggleDetailed} />
                <Typography>Detailed</Typography>
            </Box>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
                <Typography variant="caption">Use desktop for best performance</Typography>
            </Box>
        </GridToolbarContainer>
    );
    return (
        <Layout>
            <Container sx={{ textAlign: 'center', marginY: '20px' }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">M.S. ECE @ CMU</Typography>
                        <Typography>QPA</Typography>
                        <CircularProgressWithLabel
                            variant="determinate"
                            value={98.25}
                            size={200}
                            text={'3.93 / 4.00'}
                            textsx={{ fontSize: 24 }}
                        />
                        <Typography>Top 5% (estimated)</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">B.S. CS / B.A. NDT @ UCSC</Typography>
                        <Typography>GPA</Typography>
                        <CircularProgressWithLabel
                            variant="determinate"
                            value={98}
                            size={200}
                            text={'3.92 / 4.00'}
                            textsx={{ fontSize: 24 }}
                        />
                        <Typography>Top 2% (Honor: Summa Cum Laude)</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <DataGrid
                    rows={courseList}
                    columns={useColumn}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    getRowId={(row) => row.course_dept + row.course_id}
                    getRowHeight={() => 'auto'}
                    slots={{ toolbar: customToolbar }}
                />
            </Container>
        </Layout>
    );
};

export default AcademicsPage;

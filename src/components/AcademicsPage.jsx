import { Box, Button, Typography, Container, Chip } from '@mui/material';
import Layout from './Layout';

import courseList from './CourseList';
import { DataGrid } from '@mui/x-data-grid';

const AcademicsPage = () => {
    const termToText = (term) =>
        ({
            0: '',
            1: 'Winter',
            2: 'Spring',
            3: 'Summer',
            4: 'Fall',
        }[term]);
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
            width: 50,
        },
        {
            field: 'grade',
            headerName: 'Grade',
            width: 50,
        },
        {
            field: 'technology',
            headerName: 'Technologies',
            description: 'List of technologies used in the course',
            width: 350,
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
    return (
        <Layout>
            <Typography>Academics Page</Typography>
            <Container>
                <DataGrid
                    rows={courseList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    getRowId={(row) => row.course_dept + row.course_id}
                    getRowHeight={() => 'auto'}
                />
            </Container>
        </Layout>
    );
};

export default AcademicsPage;

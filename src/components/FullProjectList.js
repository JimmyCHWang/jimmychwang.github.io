const professionalProjects = [
    {
        id: 'carnegie-mellon-university-prof',
        label: 'Carnegie Mellon University',
        type: 'h2',
        children: [
            {
                id: 'exam-server',
                label: 'Exam Server',
                type: 'h3',
                children: null,
                desc: '',
                lang: ['TypeScript', 'Go'],
                tech: [],
                time: [2022, 4, 2022, 7],
            },
        ],
    },
];

const personalProjects = [
    {
        id: 'github-io-website',
        label: 'GitHub Website (this site)',
        type: 'h2',
        children: null,
        desc: 'This personal website you are looking at right now :)',
        lang: ['JavaScript'],
        tech: ['React', 'Material UI', 'React Router', 'GitHub'],
        time: [2023, 4],
    },
    {
        id: 'nfc-read-write',
        label: 'NFC Reader/Writer',
        type: 'h2',
        children: null,
        desc: 'A React-Native Application that can read/write NFC tags contents.',
        lang: ['TypeScript'],
        tech: ['React Native', 'React', 'NFC', 'Android', 'Storage', 'ReactNativeElements UI', 'React Navigation'],
        time: [2023, 2, 2023, 4],
    },
];

const academicProjects = [
    {
        id: 'carnegie-mellon-university',
        label: 'Carnegie Mellon University',
        type: 'h2',
        children: [
            {
                id: 'cmu-18652',
                label: '18652: Emergency Social Network',
                type: 'h3',
                children: null,
                desc:
                    'Foundations of Software Engineering (18652) introduces full stack development and agile/lean software development paradigms. ' +
                    'The semester-long project is a social network implemented as a mobile-first web application, which is intended for users to communicate in emergency situations. ' +
                    'Features include contact list, public chat, private chat, announcements, role-based management, etc.',
                lang: ['JavaScript'],
                tech: ['Node', 'Express.js', 'WebSocket', 'MongoDB', 'Authorization', 'Swagger', 'CI/CD'],
                time: [2022, 0, 2022, 4],
            },
        ],
    },
    {
        id: 'university-of-california-santa-cruz',
        label: 'University of California, Santa Cruz',
        type: 'h2',
        children: [
            {
                id: 'ucsc-cse156',
                label: 'CSE156: Command Line Chat Program',
                type: 'h3',
                children: null,
                desc:
                    'Network Programming (CSE156) introduces socket programming, concurrency and various network protocols. ' +
                    'The final project is a TCP-based chat program that runs on Linux with command line interface. ' +
                    'Features include messages exchange and look for other clients to chat with.',
                lang: ['C++'],
                tech: ['Socket', 'POSIX', 'Linux', 'Protocol Design', 'Thread', 'State Machine', 'Regex'],
                time: [2020, 3],
            }
        ],
    },
];

const fullProjectList = [
    {
        id: 'professional',
        label: 'Professional Projects',
        type: 'h1',
        children: professionalProjects,
    },
    {
        id: 'personal',
        label: 'Personal Projects',
        type: 'h1',
        children: personalProjects,
    },
    {
        id: 'academic',
        label: 'Academic Projects',
        type: 'h1',
        children: academicProjects,
    },
];

export default fullProjectList;

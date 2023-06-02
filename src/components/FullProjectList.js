const professionalProjects = [
    {
        id: 'carnegie-mellon-university-prof',
        label: 'Carnegie Mellon University',
        type: 'h4',
        children: [
            {
                id: 'exam-server',
                label: 'Exam Server',
                type: 'h5',
                children: null,
                desc: 'A web application for online exams. Highlight features include customized grading scripts, reusable question banks, and convenient cloning, resulting in a capability of 400 students.',
                lang: ['TypeScript', 'Go'],
                tech: ['React', 'Node', 'Bootstrap', 'Figma', 'Gin', 'Jira', 'GitHub', 'RESTful API', 'Swagger'],
                time: [2022, 4, 2022, 7],
            },
        ],
    },
    {
        id: 'sinosoft-tech',
        label: 'Sinosoft Technology Ltd.',
        type: 'h4',
        children: [
            {
                id: 'meeting-arrangement',
                label: 'Meeting Arrangement App',
                type: 'h5',
                children: null,
                desc: "A mobile-based meeting management application, including user management, check-ins, private chats, etc. Designed mobile-first user interface (UI), as well as integrating with existing desktop-based solution's back-end part.",
                lang: ['JavaScript', 'Java'],
                tech: ['Vue', 'Node', 'Ant Design', 'Figma', 'SpringBoot', 'RESTful API', 'MySQL'],
                time: [2022, 0, 2022, 3],
            },
            {
                id: 'wechat-client-app',
                label: 'Meeting Client App',
                type: 'h5',
                children: null,
                desc: 'A mini app based on WeChat, targeting meeting participants and could interact with the managing app mentioned above. Features include registration, check-in QR codes, etc.',
                lang: ['JavaScript'],
                tech: ['Framework7', 'Vue', 'Node', 'PhotoShop', 'Figma', 'SubVersion'],
                time: [2022, 0, 2022, 3],
            },
        ],
    },
    {
        id: 't34-studio',
        label: 'T34 Studio',
        type: 'h4',
        children: [
            {
                id: 'nings-wing-3',
                label: "Ning's Wing 3",
                type: 'h5',
                children: null,
                desc: 'Developed a room escape game at both ends and designed new puzzles, receiving over 80,000 downloads and 3,000 followers.',
                lang: ['ActionScript', 'JavaScript'],
                tech: ['React', 'Node', 'Bootstrap', 'Figma', 'Gin', 'Jira', 'GitHub', 'RESTful API', 'Swagger'],
                time: [2020, 0, null],
            },
        ],
    },
];

const personalProjects = [
    {
        id: 'github-io-website',
        label: 'GitHub Website (this site)',
        type: 'h5',
        children: null,
        desc: 'This personal website you are looking at right now :)',
        lang: ['JavaScript'],
        tech: ['React', 'Material UI', 'React Router', 'GitHub'],
        time: [2023, 4],
    },
    {
        id: 'nfc-read-write',
        label: 'NFC Reader/Writer',
        type: 'h5',
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
        type: 'h4',
        children: [
            {
                id: 'cmu-18652',
                label: '18652: Emergency Social Network',
                type: 'h5',
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
        type: 'h4',
        children: [
            {
                id: 'ucsc-cse156',
                label: 'CSE156: Command Line Chat Program',
                type: 'h5',
                children: null,
                desc:
                    'Network Programming (CSE156) introduces socket programming, concurrency and various network protocols. ' +
                    'The final project is a TCP-based chat program that runs on Linux with command line interface. ' +
                    'Features include messages exchange and look for other clients to chat with.',
                lang: ['C++'],
                tech: ['Socket', 'POSIX', 'Linux', 'Protocol Design', 'Thread', 'State Machine', 'Regex'],
                time: [2020, 3],
            },
        ],
    },
];

const fullProjectList = [
    {
        id: 'professional',
        label: 'Professional Projects',
        type: 'h3',
        children: professionalProjects,
    },
    {
        id: 'personal',
        label: 'Personal Projects',
        type: 'h3',
        children: personalProjects,
    },
    {
        id: 'academic',
        label: 'Academic Projects',
        type: 'h3',
        children: academicProjects,
    },
];

export default fullProjectList;

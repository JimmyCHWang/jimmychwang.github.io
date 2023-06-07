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
                tech: ['ActionScript', 'Steam Frameworks'],
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
    {
        id: 'm-league-style-chart',
        label: 'M-League Style Line Chart',
        type: 'h5',
        children: null,
        desc: 'A full-stack data visualization project that reproduced the M-League style from a TV show.',
        lang: ['JavaScript'],
        tech: ['Vue', 'Express.js', 'Chart.js', 'SQLite'],
        time: [2021, 10],
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
            {
                id: 'cmu-18654',
                label: '18654: Mutation Testing',
                type: 'h5',
                children: null,
                desc: 'Applying the testing techniques learned from class and test a piece of open-source Java code on GitHub, mutated by one of the other teams.',
                lang: ['Java'],
                tech: ['JUnit', 'Mockito', 'Black Box Testing', 'White Box Testing', 'Unit Testing'],
                time: [2022, 2],
            },
            {
                id: 'cmu-18661',
                label: '18661: Applied Machine Learning Projects',
                type: 'h5',
                children: [
                    {
                        id: 'cmu-18661-fashion-mnist',
                        label: 'Fashion MNIST',
                        type: 'h6',
                        children: null,
                        desc:
                            'Fashion MNIST requires to train a model that takes 28x28 greyscale images of different kinds of clothes, such as shirt, shoes, etc. ' +
                            ' and the model should classify the images correctly with an accuracy of at least 90%.',
                        lang: ['Python'],
                        tech: [
                            'PyTorch',
                            'numpy',
                            'pandas',
                            'Machine Learning',
                            'Neural Networks',
                            'CNN',
                            'Tensorboard',
                        ],
                        time: [2022, 3],
                    },
                    {
                        id: 'cmu-18661-spotify',
                        label: 'Spotify Data Decision Tree',
                        type: 'h6',
                        children: null,
                        desc: 'Create a decision tree that predicts whether an individual would like or dislike a song based on a list of features collected by Spotify.',
                        lang: ['Python'],
                        tech: [
                            'scikit-learn',
                            'Machine Learning',
                            'numpy',
                            'pandas',
                            'Decision Tree',
                            'graphviz',
                            'Confusion matrix',
                        ],
                        time: [2022, 3],
                    },
                ],
            },
            {
                id: 'cmu-18658',
                label: '18658: Food Bank Go',
                type: 'h5',
                children: null,
                desc: 'A design project that tries to solve the problem of food distribution and management by food banks. Created a full-stack demo.',
                lang: ['TypeScript'],
                tech: ['React', 'Express.js', 'Figma', 'Jama', 'Miro', 'Material UI', 'Bootstrap'],
                time: [2022, 8, 2022, 11],
            },
            {
                id: 'cmu-18613',
                label: '18613: Introduction to Computer Systems',
                type: 'h5',
                children: null,
                desc: "A set of lab assignments that provides a programmer's view of how computer systems execute programs, store information, and communicate.",
                lang: ['C'],
                tech: [
                    'Linux',
                    'POSIX',
                    'Memory Allocation',
                    'Memory Management',
                    'x86',
                    'Concurrency Programming',
                    'Network Programming',
                ],
                time: [2022, 8, 2022, 11],
            },
            {
                id: 'cmu-14736',
                label: '14736: Distributed Systems',
                type: 'h5',
                children: [
                    {
                        id: 'cmu-14736-lab0',
                        label: 'Word guessing game',
                        type: 'h6',
                        children: null,
                        desc: 'A multiplayer word guessing game.',
                        lang: ['Go'],
                        tech: ['Concurrency Programming', 'Multithreaded Programming', 'Channels', 'OOP'],
                        time: [2023, 0],
                    },
                    {
                        id: 'cmu-14736-lab2',
                        label: 'Raft Basic Implementation',
                        type: 'h6',
                        children: null,
                        desc:
                            'The Raft algorithm is a concensus algorithm, commonly used in distributed systems. ' +
                            'This project implements the basic features of the Raft algorithm using a self-created remote procedure call library.',
                        lang: ['Java'],
                        tech: ['Raft', 'Remote Procedure Call (RPC)', 'Consensus', 'Multithreaded Programming'],
                        time: [2023, 2],
                    },
                    {
                        id: 'cmu-14736-lab4',
                        label: 'Topic-based Publish-Subscribe system',
                        type: 'h6',
                        children: null,
                        desc:
                            'A platform that allows publishers to publish content on specific topics and subscribers to receive content from those topics. ' +
                            'Implement replication of contents across multiple storage servers, and automatic deletion of contents after all registered subscribers have read them.',
                        lang: ['Java'],
                        tech: ['Raft', 'Remote Procedure Call (RPC)', 'Consensus', 'Kafka-like', 'RESTful API'],
                        time: [2023, 3, 2023, 4],
                    },
                ],
            },
            {
                id: 'cmu-15619',
                label: '15619: Cloud Computing',
                type: 'h5',
                children: [
                    {
                        id: 'cmu-15619-elasticity',
                        label: 'AWS Resource Provision and Autoscaling Management',
                        type: 'h6',
                        children: null,
                        desc:
                            'Invoke AWS Cloud APIs to programmatically provision and deprovision cloud resources for a dynamic load. ' +
                            'Monitor cloud resources usage and metrics and automatically scale resources.',
                        lang: ['Python'],
                        tech: ['AWS', 'boto3', 'AWS EC2', 'AWS ELB', 'Hashicorp Terraform'],
                        time: [2023, 0],
                    },
                    {
                        id: 'cmu-15619-containers',
                        label: 'Docker and Kubernetes',
                        type: 'h6',
                        children: null,
                        desc: 'Configure and deploy K8s clusters, create and deploy docker images.',
                        lang: ['Java'],
                        tech: ['Docker', 'Kubernetes', 'Helm', 'GCP', 'Azure', 'Microservices', 'Ingress'],
                        time: [2023, 1],
                    },
                    {
                        id: 'cmu-15619-sql',
                        label: 'SQL and NoSQL',
                        type: 'h6',
                        children: null,
                        desc: 'A few MySQL tasks and HBase tasks.',
                        lang: ['Java'],
                        tech: ['MySQL', 'NoSQL', 'HBase', 'HDFS'],
                        time: [2023, 1],
                    },
                    {
                        id: 'cmu-15619-storage',
                        label: 'Handling with multiple storage on the cloud',
                        type: 'h6',
                        children: null,
                        desc: 'Build a complicated social network that uses three databases to store information: MySQL, Neo4J, and MongoDB.',
                        lang: ['Java'],
                        tech: ['MySQL', 'Neo4J', 'MongoDB', 'Caching'],
                        time: [2023, 2],
                    },
                    {
                        id: 'cmu-15619-spark',
                        label: 'Spark (Iterative batch processing)',
                        type: 'h6',
                        children: null,
                        desc: 'Understand Spark framework for iterative processing, and implement PageRank algorithm in Spark in an efficient way.',
                        lang: ['Scala'],
                        tech: ['Spark', 'Zeppelin Notebook', 'PageRank', 'RDD', 'DataFrame'],
                        time: [2023, 3],
                    },
                    {
                        id: 'cmu-15619-stream-processing',
                        label: 'Stream Processing w/ Kafka and Samza',
                        type: 'h6',
                        children: null,
                        desc: 'Handle stream data and create a driver-matching application like Uber.',
                        lang: ['Java'],
                        tech: ['Kafka', 'Samza', 'IoT'],
                        time: [2023, 3],
                    },
                ],
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

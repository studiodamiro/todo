export class DB {
    constructor() {
        this.projects = [
            {
                title: 'Website Redesign',
                due_date: '2023-05-30',
                bookmark: true,
                color: '',
                tasks: [
                    { name: 'Analyze website metrics', priority: true },
                    { name: 'Define design requirements', priority: false },
                    { name: 'Create wireframes', priority: true },
                    { name: 'Design website layout', priority: true },
                    { name: 'Conduct user testing', priority: false },
                ],
                note: 'Improve user experience and engagement on website through design and testing.',
            },
            {
                title: 'Social Media Campaign',
                due_date: '2023-06-15',
                bookmark: false,
                color: 'blue',
                tasks: [
                    { name: 'Define target audience', priority: true },
                    { name: 'Create social media calendar', priority: true },
                    { name: 'Develop content strategy', priority: false },
                    { name: 'Execute campaigns on social media', priority: false },
                    { name: 'Monitor and analyze campaign performance', priority: false },
                ],
                note: 'Boost brand awareness and engagement through effective social media content and campaigns.',
            },
            {
                title: 'Mobile App Development',
                due_date: '2023-07-10',
                bookmark: false,
                color: 'pink',
                tasks: [
                    { name: 'Define app features', priority: true },
                    { name: 'Create wireframes and UI designs', priority: false },
                    { name: 'Develop app functionality', priority: false },
                    { name: 'Conduct testing and debugging', priority: false },
                    { name: 'Launch app on app store', priority: false },
                ],
                note: 'Create a functional and user-friendly mobile app for customers.',
            },
            {
                title: 'Content Marketing',
                due_date: '2023-08-05',
                bookmark: false,
                color: 'green',
                tasks: [
                    { name: 'Develop content strategy', priority: false },
                    { name: 'Create content calendar', priority: true },
                    { name: 'Write blog articles', priority: true },
                    { name: 'Produce social media content', priority: false },
                    { name: 'Monitor content performance', priority: false },
                ],
                note: 'Drive traffic and increase engagement through strategic content creation and distribution.',
            },
            {
                title: 'Market Research Study',
                due_date: '2023-09-01',
                bookmark: false,
                color: 'blue',
                tasks: [
                    { name: 'Define research objectives', priority: true },
                    { name: 'Develop research methodology', priority: true },
                    { name: 'Collect and analyze data', priority: true },
                    { name: 'Generate insights and recommendations', priority: false },
                    { name: 'Create research report', priority: false },
                ],
                note: 'Generate valuable insights to inform business decisions.',
            },
            {
                title: 'Product Launch',
                due_date: '2023-10-10',
                bookmark: false,
                color: 'white',
                tasks: [
                    { name: 'Define product features', priority: true },
                    { name: 'Develop product positioning', priority: false },
                    { name: 'Create product messaging', priority: true },
                    { name: 'Plan launch event', priority: false },
                    { name: 'Execute launch strategy', priority: false },
                ],
                note: 'Successfully launch a new product into the market through effective planning and execution.',
            },
        ];
    }
}

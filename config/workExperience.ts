import { WorkExperienceArr } from "@/types";

export const workExperienceData: WorkExperienceArr = {
    workExperienceArr: [
        {
            role: "Fullstack Developer",
            company: "NEORIS",
            location: "Monterrey, N.L.",
            startDate: new Date('2022-01-03'),
            endDate: new Date('2022-08-05'),
            description: `Fullstack developer using React and .NET applying design patterns and principles of software development.
                          Participated as a front-end developer on a team of different cross-functional roles such as: Project Manager, Business Analyst, QA, UX/UI and Developers
                          working directly with the client to deliver a high quality product.
                          Mainly performed tasks such as: Implementing new features, bug fixing, refactoring, unit testing and documentation.
                          `,
            shortDescription: `As a Fullstack Developer at NEORIS, I mainly utilized React and .NET for software development while applying design patterns and software development principles. I collaborated closely with cross-functional teams, and my responsibilities encompassed feature development, bug resolution, code refactoring, comprehensive unit testing, and thorough documentation.`,
            technologies: "React, .NET, JavaScript, C#, SQL"
        },
        {
            role: "DevOps Engineer Intern",
            company: "MSCI",
            location: "Remote (US Team)",
            startDate: new Date('2022-08-08'),
            endDate: new Date('2023-01-27'),
            description: `Managed common cloud infrastructure maintenance tasks such as refactoring declarative code to avoid state clashes, fulfill compliance requirements, improve current processes and bug fix day to day encounters; Worked with a variety of cross-functional teams such as project managers, business teams and developers to build dashboards using telemetry data to get full visibility into critical workload systems, important business insights and visibility on client errors in order to act upon these events.`,
            shortDescription: `During my internship at MSCI, I took care of cloud infrastructure tasks such as code refactoring, fulfillment of compliance requirements, process improvements and bug fixing. My role involved extensive collaboration with diverse team to develop telemetry-based dashboards ensuring full visibility into critical workloads providing important business insights and error tracking capabilities.`,
            technologies: "Azure, Docker, Kubernetes, Terraform, Azure Pipelines, Bash, Powershell"
        },
        {
            role: "Applications Engineer",
            company: "Steelcase",
            location: "Monterrey, N.L.",
            startDate: new Date('2023-07-25'),
            endDate: "Present",
            description: `Work as a fullstack developer on a set of ongoing digital transformation projects using WordPress, React and .NET. Daily activies include: Strategizing and implementing new features, providing support to end users and stakeholders, bug fixing, gathering requirements and documenting processes.`,
            shortDescription: `As an Applications Engineer at Steelcase, I actively contribute to ongoing digital transformation projects. My daily responsibilities encompass strategizing and implementing new features, end users and stakeholder support, bug fixing, gathering requirements and comprehensive process documentation.`,
            technologies: "React, .NET, WordPress, JavaScript, PHP, C#, SQL"
        }
    ]
}
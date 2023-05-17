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
            technologies: "React, .NET, Javascript, C#, SQL"
        },
        {
            role: "DevOps Engineer Intern",
            company: "MSCI",
            location: "Remote (US Team)",
            startDate: new Date('2022-08-08'),
            endDate: new Date('2023-01-27'),
            description: `Managed common cloud infrastructure maintenance tasks such as refactoring declarative code to avoid state clashes, fulfill compliance requirements, improve current processes and bug fix day to day encounters; Worked with a variety of cross-functional teams such as project managers, business teams and developers to build dashboards using telemetry data to get full visibility into critical workload systems, important business insights and visibility on client errors in order to act upon these events.`,
            technologies: "Azure, Docker, Kubernetes, Terraform, Azure Pipelines, Bash, Powershell"
        }
    ]
}
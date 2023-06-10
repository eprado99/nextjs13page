import { SvgItemArray } from "@/types";
const rootFolder = "SVGs/"
const programmingLanguagesFolder = rootFolder + "programmingLanguagesSvg/"
const frameworksFolder = rootFolder + "frameworksSvg/"
const cloudFolder = rootFolder + "cloudSvg/"
export const programmingLanguagesSvg: SvgItemArray = {
    svgItemArray: [
        {
            fileName: programmingLanguagesFolder + "Go-Logo_Blue.svg",
            altText: "Go Lang Logo"
        },
        {
            fileName: programmingLanguagesFolder + "typescriptlang-ar21.svg",
            altText: "Typescript Logo"
        },
        {
            fileName: programmingLanguagesFolder + "javascript-ar21.svg",
            altText: "Javascript Logo"
        },
        {
            fileName: programmingLanguagesFolder + "python-ar21.svg",
            altText: "Python Logo"
        },
        {
            fileName: programmingLanguagesFolder + "c-sharp-small.svg",
            altText: "C Sharp Logo"
        }
    ]
}

export const frameworksSvg: SvgItemArray = {
    svgItemArray: [
        {
            fileName: frameworksFolder + "next.svg",
            altText: "NextJs Logo"
        },
        {
            fileName: frameworksFolder + "dotnet-logo-text.svg",
            altText: "Dotnet Logo"
        },
        {
            fileName: frameworksFolder + "react-native-1.svg",
            altText: "React Native Logo"
        },
        {
            fileName: frameworksFolder + "nestjs-ar21.svg",
            altText: "NestJS Logo"
        }
    ]
}

export const cloudSvg: SvgItemArray = {
    svgItemArray: [
        {
            fileName: cloudFolder + "docker-ar21.svg",
            altText: "Docker Logo"
        },
        {
            fileName: cloudFolder + "kubernetes-ar21.svg",
            altText: "Kubernetes Logo"
        },
        {
            fileName: cloudFolder + "terraform-ar21.svg",
            altText: "Terraform Logo"
        },
        {
            fileName: cloudFolder + "git-scm-ar21.svg",
            altText: "Git Logo"
        },
        {
            fileName: cloudFolder + "microsoft_azure-ar21.svg",
            altText: "Microsoft Azure Logo"
        }
    ]
}
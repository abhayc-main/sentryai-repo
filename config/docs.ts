import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/resources",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/resources",
        },
      ],
    },
    {
      title: "Ideation",
      items: [
        {
          title: "Introduction",
          href: "/resources/ideation",
        },
        {
          title: "Project Abstract",
          href: "/resources/ideation/project-abstract",
        },
        {
          title: "Full System Design",
          href: "/resources/ideation/idea-design",
        },
        {
          title: "Idea Presentation",
          href: "/resources/ideation/idea-presentation",
        },
        {
          title: "Security Charecteristics Paper",
          href: "/resources/ideation/shooter-paper",
        },
        
      ],
    },
    {
      title: "AI Code Development",
      items: [
        {
          title: "Introduction",
          href: "/resources/ai-code-development",
        },
        {
          title: "Technical Design",
          href: "/resources/ai-code-development/software-notes",
        },
        {
          title: "Code: Deep Dive",
          href: "/resources/ai-code-development/code-important",
        },
        {
          title: "Datasets",
          href: "/resources/ai-code-development/dataset",
        },
      ],
    },
    {
      title: "Hardware and Device",
      items: [
        {
          title: "Introduction",
          href: "/resources/hardware-device",
        },
        {
          title: "Hardware Notes",
          href: "/resources/hardware-device/hardware-info",
        },
        {
          title: "Code Blocks",
          href: "/resources/hardware-device/idea-presentation",
        },
        {
          title: "Style Guide",
          href: "/resources/hardware-device/style-guide",
        },
      ],
    },
    {
      title: "Final Product",
      items: [
        {
          title: "Demo",
          href: "/resources/final-product/demo",
        },
        
        {
          title: "Feedback from Professors",
          href: "/resources/final-product/professor-feedback",
          disabled: false,
        },
      ],

    },
  ],
}

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
          title: "Components",
          href: "/resources/ai-code-development/components",
        },
        {
          title: "Code Blocks",
          href: "/resources/ai-code-development/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/resources/ai-code-development/style-guide",
        },
      ],
    },
    {
      title: "Hardware and Device",
      items: [
        {
          title: "Introduction",
          href: "/resources/ai-code-development",
        },
        {
          title: "Components",
          href: "/resources/hardware-device/components",
        },
        {
          title: "Code Blocks",
          href: "/resources/hardware-device/code-blocks",
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
          href: "/resources/demo",
          disabled: false,
        },
        {
          title: "Gallery",
          href: "/resources/gallery",
          disabled: false,
        },
      ],
    },
  ],
}

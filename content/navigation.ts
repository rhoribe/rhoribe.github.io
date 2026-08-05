import type { IconName } from "@/types/icon";
import { publishableProjects } from "./projects";

const baseNavigation: ReadonlyArray<readonly [string, string, IconName]> = [
  ["About", "#about", "about"],
  ["Expertise", "#expertise", "skills"],
  ["Experience", "#experience", "experience"],
  ["Credentials", "#credentials", "certifications"],
  ["Contact", "#contact", "contact"],
];

export const navigation: ReadonlyArray<readonly [string, string, IconName]> =
  publishableProjects.length > 0
    ? [
        ...baseNavigation.slice(0, -1),
        ["Projects", "#projects", "projects"],
        baseNavigation.at(-1)!,
      ]
    : baseNavigation;

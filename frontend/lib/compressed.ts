import fs from "fs";
import path from "path";
import matter from "gray-matter";

const exhibitorDirectory = path.join(process.cwd(), "compressed", "2023");

interface Metadata {
  name: string;
  image: string;
}

export interface ExhibitorData extends Metadata {
  id: string;
  content?: any;
}

export interface ExhibitorIDMapping {
  id: string;
  name: string;
}

export function getExhibitorData(name: string): ExhibitorData {
  const id = name;
  const fullPath = path.join(exhibitorDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents, { delimiters: "+++" });

  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as Metadata),
  };
}

export function getAllExhibitorData(): ExhibitorData[] {
  const fileNames = fs.readdirSync(exhibitorDirectory);
  const allShowData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(exhibitorDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { delimiters: "+++" });

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Metadata),
    };
  });

  return allShowData;
}

export function getAllExhibitorIDs(): ExhibitorIDMapping[] {
  const allData = getAllExhibitorData();
  return allData.map((value) => ({
    id: value.id,
    name: value.name,
  }));
}

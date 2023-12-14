import { unified } from "unified";
import remarkParse from "remark-parse";
import html from "remark-html";

export async function markdownToHtml(markdown: string) {
  const result = await unified().use(remarkParse).use(html).process(markdown);
  return result.toString();
}

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || "");
};

interface LexicalImageSize {
  width?: number;
  height?: number;
  mimeType?: string;
  filesize?: number;
  url?: string;
  filename?: string;
}

interface LexicalUploadValue {
  id: string;
  alt?: string;
  mimeType?: string;
  url?: string;
  height?: number;
  sizes?: {
    xs?: LexicalImageSize;
    sm?: LexicalImageSize;
    lg?: LexicalImageSize;
    xl?: LexicalImageSize;
    opengraph?: LexicalImageSize;
  };
}

// Bitmask values from Lexical's TextNode format field.
export const LexicalTextFormat = {
  BOLD: 1,
  ITALIC: 2,
  STRIKETHROUGH: 4,
  UNDERLINE: 8,
  CODE: 16,
  SUBSCRIPT: 32,
  SUPERSCRIPT: 64,
} as const;

interface LexicalNode {
  type: string;
  // Element nodes (paragraph, heading, list, listitem, quote, link, root)
  children?: LexicalNode[];
  indent?: number;
  // Text (leaf) nodes
  text?: string;
  format?: number;
  // Heading
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  // Link / autolink
  fields?: {
    url?: string;
    newTab?: boolean;
    linkType?: "custom" | "internal";
  };
  // List / listitem
  listType?: "bullet" | "number" | "check";
  checked?: boolean;
  // Upload
  relationTo?: string;
  value?: LexicalUploadValue | string | number;
}

export interface LexicalRootDoc {
  root: LexicalNode;
}

// Depth-first search for the first inline "upload" node, e.g. to use as a
// fallback OG image when a document doesn't have a dedicated one set.
export const findFirstUploadValue = (
  doc: LexicalRootDoc | null | undefined
): LexicalUploadValue | undefined => {
  const visit = (node: LexicalNode | undefined): LexicalUploadValue | undefined => {
    if (!node) return undefined;
    if (node.type === "upload" && typeof node.value === "object") {
      return node.value as LexicalUploadValue;
    }
    for (const child of node.children || []) {
      const found = visit(child);
      if (found) return found;
    }
    return undefined;
  };

  return visit(doc?.root);
};

export default LexicalNode;

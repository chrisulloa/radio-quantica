interface ImageSize {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  url: string;
  filename: string;
}

interface RichTextNode {
  bold: boolean;
  code: boolean;
  italic: boolean;
  url: string;
  newTab?: boolean;
  type: string;
  value?: {
    id: string;
    alt?: string;
    mimeType?: string;
    sizes: {
      xs: ImageSize;
      sm: ImageSize;
      lg: ImageSize;
      xl: ImageSize;
      opengraph: ImageSize;
    };
  };
  children: RichTextNode[];
}

export default RichTextNode;

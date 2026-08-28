import { Fragment } from "react";
import escapeHTML from "escape-html";
import Link from "next/link";
import LexicalNode, {
  LexicalRootDoc,
  LexicalTextFormat,
} from "../lib/lexicalNode";
import LightboxImage from "./lightboxImage";

const serializeTextNode = (node: LexicalNode, key: number) => {
  let text = (
    <span
      className="whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: escapeHTML(node.text || "") }}
    />
  );
  const format = node.format || 0;

  if (format & LexicalTextFormat.BOLD) {
    text = (
      <strong className="text-white font-bold" key={key}>
        {text}
      </strong>
    );
  }

  if (format & LexicalTextFormat.CODE) {
    text = <code key={key}>{text}</code>;
  }

  if (format & LexicalTextFormat.ITALIC) {
    text = (
      <em key={key} className="text-white">
        {text}
      </em>
    );
  }

  if (format & LexicalTextFormat.UNDERLINE) {
    text = <u key={key}>{text}</u>;
  }

  if (format & LexicalTextFormat.STRIKETHROUGH) {
    text = <s key={key}>{text}</s>;
  }

  if (format & LexicalTextFormat.SUBSCRIPT) {
    text = <sub key={key}>{text}</sub>;
  }

  if (format & LexicalTextFormat.SUPERSCRIPT) {
    text = <sup key={key}>{text}</sup>;
  }

  return <Fragment key={key}>{text}</Fragment>;
};

const HEADING_CLASSNAMES: Record<NonNullable<LexicalNode["tag"]>, string> = {
  h1: "text-2xl font-bold mb-4 mt-6",
  h2: "text-xl font-bold mb-3 mt-5",
  h3: "text-lg font-bold mb-2 mt-4",
  h4: "text-base font-bold mb-2 mt-3",
  h5: "text-sm font-bold mb-1 mt-2",
  h6: "text-xs font-bold mb-1 mt-2",
};

const serializeChildren = (nodes: LexicalNode[] | undefined) =>
  (nodes || []).map((node: LexicalNode, i: number) => {
    if (!node) {
      return null;
    }

    if (node.type === "text" || node.type === "tab") {
      return serializeTextNode(node, i);
    }

    if (node.type === "linebreak") {
      return <br key={i}></br>;
    }

    if (node.type === "horizontalrule") {
      return <hr key={i}></hr>;
    }

    switch (node.type) {
      case "heading": {
        const Tag = node.tag || "h1";
        return (
          <Tag key={i} className={HEADING_CLASSNAMES[Tag]}>
            {serializeChildren(node.children)}
          </Tag>
        );
      }
      case "quote":
        return (
          <blockquote key={i}>{serializeChildren(node.children)}</blockquote>
        );
      case "list": {
        const ListTag = node.listType === "number" ? "ol" : "ul";
        return <ListTag key={i}>{serializeChildren(node.children)}</ListTag>;
      }
      case "listitem":
        return <li key={i}>{serializeChildren(node.children)}</li>;
      case "link":
      case "autolink":
        return (
          <Link
            href={escapeHTML(node.fields?.url || "")}
            target={node.fields?.newTab === true ? "_blank" : ""}
            key={i}
            rel="noreferrer"
            className="hover:cursor-pointer underline hover:bg-white hover:text-black"
          >
            {serializeChildren(node.children)}
          </Link>
        );
      case "upload": {
        const value =
          typeof node.value === "object" && node.value !== null
            ? node.value
            : undefined;
        if (!value) return null;

        // Payload still stitches together a URL (e.g. ".../media/null") when a
        // given size wasn't actually generated for this upload, instead of
        // omitting it. Skip those rather than rendering a broken image.
        const isUsableUrl = (url: string | undefined): url is string =>
          !!url && !/\/(null|undefined)$/.test(url);

        const image = [value.sizes?.lg, value.sizes?.sm].find((size) =>
          isUsableUrl(size?.url),
        );

        const imageUrl =
          image?.url || (isUsableUrl(value.url) ? value.url : "");
        if (!imageUrl) return null;

        const fullImageUrl = isUsableUrl(value.sizes?.xl?.url)
          ? value.sizes?.xl?.url
          : imageUrl;

        const alt = value.alt || "Rádio Quântica Image";

        return (
          <LightboxImage
            key={i}
            src={imageUrl}
            alt={alt}
            width={1280}
            height={image?.height || value.height}
            sizes="(max-width: 768px) 80vw, 65vw"
            className="py-4"
            fullSrc={fullImageUrl}
          ></LightboxImage>
        );
      }
      default:
        return (
          <p key={i} className="mb-4 last:mb-0">
            {serializeChildren(node.children)}
          </p>
        );
    }
  });

const SerializeLexical = (doc: LexicalRootDoc | null | undefined) =>
  serializeChildren(doc?.root?.children);

export default SerializeLexical;

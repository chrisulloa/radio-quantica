import { Fragment } from "react";
import escapeHTML from "escape-html";
import Image from "next/image";
import Link from "next/link";
import LexicalNode, {
  LexicalRootDoc,
  LexicalTextFormat,
} from "../lib/lexicalNode";

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
      <strong className="text-white" key={key}>
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
        return <Tag key={i}>{serializeChildren(node.children)}</Tag>;
      }
      case "quote":
        return <blockquote key={i}>{serializeChildren(node.children)}</blockquote>;
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

        const image = value.sizes?.lg || value.sizes?.sm;
        const imageUrl = image?.url || value.url || "";
        const alt = value.alt || "Rádio Quântica Image";

        return (
          <Image
            key={i}
            src={imageUrl}
            alt={alt}
            width={1280}
            height={image?.height || value.height}
            sizes="(max-width: 768px) 80vw, 65vw"
            className="py-4"
          ></Image>
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

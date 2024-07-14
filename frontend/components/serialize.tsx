import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import RichTextNode from "../lib/textNode";
import Image from "next/image";
import Link from "next/link";

const Serialize = (children: RichTextNode[]) =>
  children.map((node: RichTextNode, i: number) => {
    if (Text.isText(node)) {
      let text = (
        <span
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: escapeHTML(node.text),
          }}
        />
      );

      if (node.text === "" || node.text === "\n") {
        text = <br></br>;
      }

      if (node.bold) {
        text = (
          <strong className="text-white" key={i}>
            {text}
          </strong>
        );
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = (
          <em key={i} className="text-white">
            {text}
          </em>
        );
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return <h1 key={i}>{Serialize(node.children)}</h1>;
      // Iterate through all headings here...
      case "h6":
        return <h6 key={i}>{Serialize(node.children)}</h6>;
      case "blockquote":
        return <blockquote key={i}>{Serialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{Serialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{Serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{Serialize(node.children)}</li>;
      case "link":
        return (
          <Link
            href={escapeHTML(node.url)}
            target={node.newTab === true ? "_blank" : ""}
            key={i}
            rel="noreferrer"
            className="hover:cursor-pointer underline hover:bg-white hover:text-black"
          >
            {Serialize(node.children)}
          </Link>
        );
      case "upload":
        const image = node.value?.sizes.lg || node.value?.sizes.sm;
        const imageUrl = image?.url || "";
        const alt = node.value?.alt || "Rádio Quântica Image";
        const width = image?.width;
        const height = image?.height;

        return (
          <Image
            key={i}
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            className="py-4"
          ></Image>
        );

      default:
        return <p key={i}>{Serialize(node.children)}</p>;
    }
  });

export default Serialize;

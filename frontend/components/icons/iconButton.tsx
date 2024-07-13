import Link from "next/link";
import { ReactNode } from "react";

const IconButton = (props: { url: string; children: ReactNode }) => {
  return (
    <Link className="hover:opacity-60 " href={props.url} target={"_blank"}>
      {props.children}
    </Link>
  );
};

export default IconButton;

import React from "react";

type Props = { children: String };

function HeadingHighlight({ children }: Props) {
  return <div className="heading-highlight">{children}</div>;
}

export default HeadingHighlight;

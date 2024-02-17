import { useState } from "react";
interface Props {
  children: string;
  maxChars: number;
}
const ExpandableText = ({ children, maxChars }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <div>{children}</div>;
  let text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <div>
      {text}{" "}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;

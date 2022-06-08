import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return <p style={{ height: "50px", backgroundColor: "teal" }}></p>;
});

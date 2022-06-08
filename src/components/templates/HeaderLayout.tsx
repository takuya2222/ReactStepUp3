import { memo, ReactNode, VFC } from "react";

import { Header } from "../layout/Header";

type Props = {
  // ReactNodeはタグで囲った要素を渡していけるような型の宣言になるので、childrenのような
  // タグで囲ったものを受け取るときは、型の定義にReactNodeを使う
  children: ReactNode;
};

// VFCは関数コンポーネントの型を指定している。その右の<Props>はmemoの右にある
// propsの型を指定している。
// 仮にここでFCを使うと親コンポーネントの中の親タグの中身（children）も暗黙的に
// 受け取ることになってしまう。
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

// extendThemeはグローバルなテーマを指定する上で必要
// グローバルなスタイルとはアプリケーション全体で適応されるCSSのこと。
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});
export default theme;

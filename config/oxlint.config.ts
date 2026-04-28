// choose one
// import base from "@linzjs/style/oxlint.config";
import base from "@linzjs/style/oxlint.config-react";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base],
  // categories: {
  //   correctness: 'error',
  //   perf: 'error',
  // },
});

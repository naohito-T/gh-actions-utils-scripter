/** @desc PR元 */
export interface FromBranch {
  from: string;
}

/** @desc PRのmerge先 */
export interface BaseBranch {
  base: string;
}

export type BaseWithFromBranch = BaseBranch & FromBranch;

/** @desc actions/github-script実行時に与えられる引数 */
export type CustomGitHubContext = BaseBranch & Partial<FromBranch>;

export interface UpdateBodyMessage {
  title: string;
  htmlLink: string;
}
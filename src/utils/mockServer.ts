import { LESS_POSTS, POSTS } from "./constants";
import { POST_TYPE } from "./types";

async function delay (delayInMS: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, delayInMS);
  });
}

export const getPosts = async (largeList: boolean): Promise<POST_TYPE[]> => {
  await delay(1000);
  return largeList ? POSTS : LESS_POSTS;
};

export const loginOrSignupUser = async (): Promise<boolean> => {
  await delay(1000);

  return true;
}

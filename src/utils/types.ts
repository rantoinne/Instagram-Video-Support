import { COLOR_CODES, MEDIA_TYPE } from './enums';

export type COLOR_CODE_TYPE = COLOR_CODES | string;

export type BASIC_DIMENSIONS = {
  x?: number;
  y?: number;
  width: number;
  height: number;
};

export type POST_TYPE = {
  url?: string;
  urls?: string[];
  type?: MEDIA_TYPE;
  comments: number[];
  postLikes: number[];
  description: string;
  user: {
    fullName: string;
    userName: string;
    userAvatar: string;
  },
  id: string | number | number[];
}

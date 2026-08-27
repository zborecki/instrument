export type Identifier = number | string;

export interface IImage {
  alt?: string;
  src: string;
}

export interface ILink {
  href: string;
  isExternal?: boolean;
  name: string;
}

export interface IMetadata {
  title: string;
  description: Nullable<string>;
  keywords: Keywords;
}

export type Keywords = Nullable<Array<string>>;

export type Nullable<T> = T | null;

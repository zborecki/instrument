export type PageParams = {
  slug?: Array<string>
}

export interface IPageProps {
  params: Promise<PageParams>;
}

# Http Client

## Initialization
```ts
const baseURL = "https://zborecki.com/api";

export type Endpoint = "/articles" | "/articles/:slug";
export const httpClient = new HttpClient<Endpoint>(baseURL);
```

## [GET] Fetch all articles
```ts
const articles = await httpClient.get<Article[]>("/articles");
```

## [GET] Fetch articles using query params
```ts
const articles = await httpClient.get<Article[]>("/articles", {
  query: {
    category: "development",
    author: 'jane-doe'
  },
});
```

## [GET] Fetch an article by its slug
```ts
const article = await httpClient.get<Article>("/articles/:slug", {
  params: { slug: 'where-does-the-hedgehog-toddle-at-night' },
});
```

## [POST] Create a resource
```ts
const response = await httpClient.post<Article, CreateArticleDTO>("/articles", {
  content: "<h2>Hello world!</h2>",
  title: "Jane Doe"
});
```

## [PATCH / PUT] Update an article by its slug
```ts
await httpClient.patch<Article, Partial<Article>>("/articles/:slug", {
  title: "New title",
}, {
  params: { slug: 'where-does-the-hedgehog-toddle-at-night' }
});
```

## [DELETE] Delete an article by its slug
```ts
await httpClient.delete<void>("/articles/:slug", {
  params: { slug: 'where-does-the-hedgehog-toddle-at-night' }
});
```
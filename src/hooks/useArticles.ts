import { useState, useCallback, useEffect } from "react";
import { singletonHook } from "react-singleton-hook";
import { Article } from "../types/Article";

const init = {
  articles: [],
  getArticles: () => {
    return new Promise<Article[]>(() => []);
  },
  createArticle: ({ title, url }: { title: string; url: string }) => {
    return new Promise<Article>(() => null);
  },
  isLoading: true,
};

const useArticlesImpl = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setLoading] = useState(true);

  const getArticles = useCallback(async () => {
    const articlesData: Article[] = await fetch("/api/articles")
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
        return articles;
      });

    return articlesData;
  }, [setArticles]);

  useEffect(() => {
    const core = async () => {
      await getArticles();
      setLoading(false);
    };
    core();
  }, [getArticles, setLoading]);

  const createArticle = useCallback(
    async ({ title, url }: { title: string; url: string }) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        title,
        url,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const newArticle: Article = await fetch("api/articles", requestOptions)
        .then((response) => response.json())
        .then((newArticleResponse) => {
          const newArticle: Article = newArticleResponse.data;

          setArticles([...articles, newArticle]);
          return newArticle;
        });

      return newArticle;
    },
    [articles, setArticles]
  );

  return { articles, getArticles, createArticle, isLoading };
};

export const useArticles = singletonHook(init, useArticlesImpl);

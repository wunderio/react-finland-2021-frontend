import React from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

export function ArticleTeaser({ article }) {
  return (
    <div className="article-teaser">
      <div className="article-content">
        <figure>
          <Image
            src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${article.field_image.uri.url}`}
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
            alt={article.field_image.resourceIdObjMeta.alt}
          />
        </figure>
        <Link href={article?.path?.alias}>
          <a>
            <h2>{article.title}</h2>
          </a>
        </Link>
        <small>
          By <strong>{article.uid.display_name}</strong>
        </small>
        <p>{article.body.summary}</p>
      </div>
    </div>
  );
}

export const article_schema = z.object({
  title: z.string(),
  uid: z.object({
    display_name: z.string(),
  }),
  field_image: z.object({
    uri: z.object({
      url: z.string(),
    }),
    resourceIdObjMeta: z.object({
      alt: z.string(),
    }),
  }),
  body: z.object({
    processed: z.string(),
  }),
});

type ArticleProps = z.infer<typeof article_schema>;

export function ArticleFull(props: ArticleProps) {
  const { title, uid, field_image, body } = props;

  return (
    <article className="article-full">
      <h2>{title}</h2>
      <small>
        By <strong>{uid.display_name}</strong>
      </small>

      {field_image?.uri && (
        <figure>
          <Image
            src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${field_image.uri.url}`}
            width={768}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={field_image.resourceIdObjMeta.alt}
          />
        </figure>
      )}

      {body?.processed && (
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: body?.processed }}
        />
      )}
    </article>
  );
}

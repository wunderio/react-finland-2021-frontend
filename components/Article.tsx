import React from "react";
import Image from "next/image";
import Link from "next/link";

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

type FieldImage = {
  uri: {
    url: string;
  };
  resourceIdObjMeta: {
    alt: string;
  };
};

type ArticleProps = {
  title: string;
  uid: {
    display_name: string;
  };
  field_image: FieldImage;
  body: {
    processed: string;
  };
};

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

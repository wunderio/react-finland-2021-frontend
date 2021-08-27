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

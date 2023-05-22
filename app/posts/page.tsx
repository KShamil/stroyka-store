import { Metadata } from "next";
import Link from "next/link";
import React from "react";

async function getData() {
  const response = await fetch("http://localhost:3001/posts", {
    next: {
        revalidate:5,
    },
  });
  return response.json();
}

export const metadata: Metadata = {
  title: "Posts Page",
};

export default async function PostsPage({ ...props }): Promise<JSX.Element> {
  const posts = await getData();

  return (
    <div {...props}>
      <ol>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

import React from "react";
import { PostProps } from "./Post.props";
import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
    const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({
  params: { id },
  ...props
}: PostProps):Promise<JSX.Element> {

    const post = await getData(id);

  return <div {...props}>
     <h1>{post.title}</h1>
     <p>{post.body}</p>
  </div>;
}

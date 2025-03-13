import style from './PostLinkCard.module.css';

interface PostLinkCardProps {
  post: {
    slug: string;
    category: string;
  };
}

export default function PostLinkCard({ post }: PostLinkCardProps) {
  return (
    <div className={style.card}>
      <a href={`/posts/${post.category}/${post.slug}`}>
        {post.slug}
      </a>
    </div>
  );
}
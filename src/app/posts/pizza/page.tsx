import fs from 'fs';
import path from 'path';

function getPizzaPosts() {
  const postsDirectory = path.join(
    process.cwd(),
    'src/app/posts/pizza/luigis-pizza'
  );
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((file) => {
    return {
      slug: file.replace('.mdx', ''),
      category: 'pizza',
    };
  });
  return posts;
}

export default function PizzaPage() {
  return (
    <div>
      {getPizzaPosts().map((post) => (
        <div key={post.slug}>
          <a href={`/posts/pizza/${post.slug}`}>Luigis Pizza</a>
        </div>
      ))}
    </div>
  );
}

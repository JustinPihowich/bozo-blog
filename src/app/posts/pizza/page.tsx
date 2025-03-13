import fs from 'fs';
import path from 'path';
import PageLayout from '../../../components/PageLayout/PageLayout';
import styles from './pizza-styles.module.css';
import PostLinkCard from '../../../components/PostLinkCard/PostLinkCard';

function getPizzaPosts() {
  const postsDirectory = path.join(
    process.cwd(),
    'src/app/posts/pizza'
  );
  const filesDirectories = fs.readdirSync(postsDirectory);
  const pizzaPosts = filesDirectories.map((fileDir) => {
    return {
      slug: fileDir,
      category: 'pizza',
    }
  })
  console.log(pizzaPosts);
  return pizzaPosts;
}

export default function PizzaPage() {
  return (
    <PageLayout>
      <h1>Pizza Posts</h1>
      <div className={styles['pizza-posts-list']}>
        {getPizzaPosts().map((post) => (
          <PostLinkCard key={post.slug} post={post} />
        ))}
      </div>
    </PageLayout>
    
  );
}

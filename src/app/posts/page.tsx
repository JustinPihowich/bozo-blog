import fs from 'fs';
import path from 'path';
import PageLayout from '../../components/PageLayout/PageLayout';
import styles from './posts-styles.module.css';
import PostLinkCard from '../../components/PostLinkCard/PostLinkCard';

function getPizzaPosts() {
  const postsDirectory = path.join(
    process.cwd(),
    'src/app/posts/pizza'
  );
  const allItems = fs.readdirSync(postsDirectory);
  const filesDirectories = allItems.filter(item => {
    const itemPath = path.join(postsDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  const pizzaPosts = filesDirectories.map((fileDir) => {
    return {
      slug: fileDir,
      category: 'pizza',
    }
  })
  console.log(pizzaPosts);
  return pizzaPosts;
}

function getEntertainmentPosts() {
  const postsDirectory = path.join(
    process.cwd(),
    'src/app/posts/entertainment'
  );
  const allItems = fs.readdirSync(postsDirectory);
  const filesDirectories = allItems.filter(item => {
    const itemPath = path.join(postsDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const entertainmentPosts = filesDirectories.map((fileDir) => {
    return {
      slug: fileDir,
      category: 'entertainment',
    }
  })
  console.log(entertainmentPosts);
  return entertainmentPosts;
}

function getMiscPosts() {
  const postsDirectory = path.join(
    process.cwd(),
    'src/app/posts/misc'
  );
  const allItems = fs.readdirSync(postsDirectory);
  const filesDirectories = allItems.filter(item => {
    const itemPath = path.join(postsDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const miscPosts = filesDirectories.map((fileDir) => {
    return {
      slug: fileDir,
      category: 'misc',
    }
  })
  console.log(miscPosts);
  return miscPosts;
}

export default function PizzaPage() {
  return (
    <PageLayout>
      <h1>Pizza Posts</h1>
      <div className={styles['posts-list']}>
        {getPizzaPosts().map((post) => (
          <PostLinkCard key={post.slug} post={post} />
        ))}
      </div>
      <h1>Entertainment Posts</h1>
      <div className={styles['posts-list']}>
        {getEntertainmentPosts().map((post) => (
          <PostLinkCard key={post.slug} post={post} />
        ))}
      </div>
      <h1>Miscellaneous Posts</h1>
      <div className={styles['posts-list']}>
        {getMiscPosts().map((post) => (
          <PostLinkCard key={post.slug} post={post} />
        ))}
      </div>
    </PageLayout>
    
  );
}

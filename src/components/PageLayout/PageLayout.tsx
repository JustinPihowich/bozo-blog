'use client';
import styles from './PageLayout.module.css';
import React, { PropsWithChildren } from 'react';

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <div className={styles['main-content']}>{children}</div>
      <div className={styles.sidebar}></div>
    </div>
  );
}

import React from 'react';
import styles from './MaxWidthWrapper.module.css';

function MaxWidthWrapper({
  children,
  as: Tag = 'div',
  className = '',
  ...delegated
}) {
  return (
    <Tag
      {...delegated}
      className={`${styles.wrapper} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default MaxWidthWrapper;

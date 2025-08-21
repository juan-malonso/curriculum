import React from 'react';

const LinkClass = '';
const LinkIcon = '➚';

export const Link = ({ label, link }: { label: string; link?: string }) => {
  if (link) {
    const externalLink = link?.includes('https://');

    const text = externalLink ? `${label} ${LinkIcon}` : label;

    return (
      <a href={link} className={LinkClass}>
        {text}
      </a>
    );
  }

  return label;
};

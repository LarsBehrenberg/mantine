import React from 'react';
import { DiscordIcon } from './DiscordIcon';
import { GithubIcon } from './GithubIcon';
import { TwitterIcon } from './TwitterIcon';

export default { title: 'DS/Icons' };

export function Usage() {
  return (
    <div style={{ color: 'red' }}>
      <DiscordIcon size={40} />
      <GithubIcon size={40} />
      <TwitterIcon size={40} />
    </div>
  );
}
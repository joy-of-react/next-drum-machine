import React from 'react';

import MaxWidthWrapper from '../components/MaxWidthWrapper';
import DrumMachine from '../components/DrumMachine';
import styles from './page.module.css';

function Home() {
  return (
    <MaxWidthWrapper
      as="main"
      className={styles.wrapper}
    >
      <h1>
        Welcome to the zaniest place on the ‘Web!
      </h1>
      <p>
        Hey there, fellow netizens! If you're
        reading this, you've stumbled upon the
        coolest corner of the internet: my awesome
        website. Get ready to embark on a
        nostalgic journey back to the groovy era
        of the 90s, where the web was wild, and
        creativity ran free!
      </p>
      <p>
        I've created the gnarliest drum machine
        ever. Press the buttons to hear the music.
        Tubular!
      </p>
      <DrumMachine />
    </MaxWidthWrapper>
  );
}

export default Home;

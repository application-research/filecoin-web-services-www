import styles from '@components/SectionRoadmap.module.scss';

import * as React from 'react';

export default function SectionRoadmap(props) {
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>🌎 Filecoin Web Services</h1>
      <p className={styles.desc}>
        Building out the alternative to AWS, GCP, and Azure. Using the power of Filecoin, a powerful L0 and decentralized storage network. Learn more about how the Engineering team
        at Outercore & Protocol Labs aims to achieve this by reading our Roadmap.
      </p>

      <p className={styles.paragraph}>This is our mission:</p>

      <p className={styles.quote}>
        We want an internet where resources are owned & shared by everyone. Everyone shares consensus over a distributed ledger. Data storage is verifiably stored for the end-user,
        and more fault tolerant. There is no central authority of control and no single point of failure. And the security promise only improves as the network continues to grow.
        Just imagine all of the certifications that can be automatically generated for end users by a new network like this. This is how you achieve storage as a human right for
        anyone in the world.
        <br />
        <br />
        We're going to prove that we can get here by building the tools that can support onboarding 10 PiBs a day of data to the Filecoin Network. But we're also not going to
        forget about retrievability and helping the Filecoin Network actually become usable.
      </p>

      <h2 className={styles.roadmapHeading}>Tools & Roadmap</h2>

      <h3 className={styles.subheading}>
        Delta{' '}
        <a className={styles.website} href="https://delta.slate" target="_blank">
          (https://delta.state)
        </a>
      </h3>
      <p className={styles.paragraph}>
        Use ∆ Delta to upload all of your useful public data to Filecoin storage providers. Delta is a straight-forward Filecoin storage deal making tool that manages deals, and
        does not do anything else. It is purely for the function of helping Storage Providers fill capacity either through online or offline methods. It is written in Go and
        designed to be paired well with bare-metal infrastructure.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>March 27th, 2023</strong> — Launch of V1, with proof that multiple storage providers have been successful with onboarding their data.
        </li>
        <li className={styles.item}>
          <strong>April 14th, 2023</strong> — Launch of documentation.
        </li>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — New roadmap released based on learnings, successes, and failures.
        </li>
      </ul>

      <h3 className={styles.subheading}>
        Estuary V2{' '}
        <a className={styles.website} href="https://estuary.tech" target="_blank">
          (https://estuary.tech)
        </a>
      </h3>
      <p className={styles.paragraph}>
        Estuary V2 involves infrastructure upgrades that will reduce the cost of operations to under $5,000 USD a month. These savings will save us a million a year. In addition
        Estuary V2 will ensure high retrievability for data clients with under 100 Terabytes of user data. We will also provide an infrastructure provisioning service where people
        can pay for infrastructure using Filecoin.
      </p>

      <p className={styles.paragraph}>
        Estuary has always been a service where users can retrieve everything they upload. This makes Estuary usable by services and helps prove that Filecoin has "useful" data.
        Estuary will continue to commit to this promise and work with L2 solutions for retrieval to help provide more methods for users to get their data. Estuary is written in Go
        and is designed to be paired well with bare-metal infrastructure. You can run your own or rely on our mainline service.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>February 9th, 2023</strong> — Installation of new infrastructure begins.
        </li>
        <li className={styles.item}>
          <strong>March 27th, 2023</strong> — Launch of V2 Infrastructure.
        </li>
        <li className={styles.item}>
          <strong>April 3rd, 2023</strong> — Begin onboarding of new users, retry onboarding all of NEAR's blockchain and getting a second blockchain customer.
        </li>
        <li className={styles.item}>
          <strong>May 5th, 2023</strong> — A new redesign of the core product and offering.
        </li>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — New roadmap released based on learnings, successes, and failures.
        </li>
      </ul>

      <h3 className={styles.subheading}>Ptolemy</h3>
      <p className={styles.paragraph}>A new project for enterprise clients who also run data centers and want to backup their data to Filecoin.</p>
    </div>
  );
}

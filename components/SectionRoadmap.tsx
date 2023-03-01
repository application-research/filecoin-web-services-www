'use client';

import styles from '@components/SectionRoadmap.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export default function SectionRoadmap(props) {
  const [data, setData] = React.useState({
    total_content_consumed: 0,
    total_e2e_deals: 0,
    total_e2e_deals_in_bytes: 0,
    total_import_deals: 0,
    total_import_deals_in_bytes: 0,
    total_miners: 0,
    total_piece_commitment_made: 0,
    total_piece_committed: 0,
    total_proposal_made: 0,
    total_proposal_sent: 0,
    total_sealed_deal_in_bytes: 0,
    total_storage_allocated: 0,
    total_transfer_finished: 0,
    total_transfer_started: 0,
  });

  React.useEffect(() => {
    async function init() {
      const response = await fetch('http://shuttle-4-bs2.estuary.tech:1414/open/stats/totals/info');
      const json = await response.json();
      setData({ ...json });
    }

    init();
  }, []);

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
        <a className={styles.website} href="https://delta.store" target="_blank">
          (https://delta.store)
        </a>
      </h3>
      <img src="https://user-images.githubusercontent.com/310223/221113426-80a53e2b-9eb1-470c-a26b-f3aba69008f6.png" className={styles.image} />
      <p className={styles.paragraph}>Our solution to archival and cold storage use cases. See our Delta node's current performance:</p>

      <div className={styles.performance}>
        <span className={styles.dataTag}>
          <span className={styles.dataTagLeft}>{data.total_e2e_deals}</span>
          <span className={styles.dataTagRight}>End-to-end deals</span>
        </span>
        <span className={styles.dataTag}>
          <span className={styles.dataTagLeft}>{Utilities.bytesToSize(data.total_e2e_deals_in_bytes)}</span>
          <span className={styles.dataTagRight}>Total end-to-end size</span>
        </span>

        <span className={styles.dataTag}>
          <span className={styles.dataTagLeft}>{data.total_import_deals}</span>
          <span className={styles.dataTagRight}>Import deals</span>
        </span>

        <span className={styles.dataTag}>
          <span className={styles.dataTagLeft}>{Utilities.bytesToSize(data.total_import_deals_in_bytes)}</span>
          <span className={styles.dataTagRight}>Total import size</span>
        </span>

        <span className={styles.dataTag}>
          <span className={styles.dataTagLeft}>{Utilities.bytesToSize(data.total_e2e_deals_in_bytes + data.total_import_deals_in_bytes)}</span>
          <span className={styles.dataTagRight}>Total</span>
        </span>

        <span className={styles.dataTag}>
          <span className={styles.dataTagLeft}>{Utilities.bytesToSize((data.total_e2e_deals_in_bytes + data.total_import_deals_in_bytes) * 1000)}</span>
          <span className={styles.dataTagRight}>1000x scaled size potential</span>
        </span>
      </div>

      <p className={styles.paragraph}>
        Use ∆ Delta to upload all your data to Filecoin storage providers. Delta has a straight forward deal manager. Either import your deals or use the end-to-end tooling. It is
        written in Go and designed to be paired well with bare-metal infrastructure. Delta can be integrated well with any deal preparation tooling such as{' '}
        <a href="https://github.com/anjor/filecoin_data_prep_tools" target="_blank">
          https://github.com/anjor/filecoin_data_prep_tools
        </a>
        .
      </p>

      <p className={styles.paragraph}>Features:</p>
      <p className={styles.paragraph}>
        ➝ Track which storage providers data is stored on <br />
        ➝ Track deal state <br />
        ➝ Failure handling and reconciliation <br />
        ➝ Track file, sector metadata, CID <br />
        ➝ Deal status tracking <br />
        ➝ Custom configuration <br />
        ➝ Storage provider details <br />
        ➝ Offline deal prepping engine, micro service <br />
        ➝ Online deal prepping engine, micro service <br />
        ➝ Support HTTP, Bitswap <br />
        ➝ CAR generation for each piece <br />
        ➝ CommP calculation for each piece <br />
        ➝ Retry testying <br />
        ➝ Full tracking on deal state, data state, dataset state <br />
        ➝ SSL terminated HA proxy (scale out solution) <br />
        ➝ Containerization / docker / K8s capable <br />
        ➝ API scoping / between modules / sandboxing <br />➝ CLI
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>March 27th, 2023</strong> — Launch of V1, with proof that multiple storage providers have been successful with onboarding their data.
        </li>
        <li className={styles.item}>
          <strong>April 14th, 2023</strong> — Launch of documentation.
        </li>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — New roadmap released after our calibrations.
        </li>
      </ul>
      <h3 className={styles.subheading}>
        Estuary V2{' '}
        <a className={styles.website} href="https://estuary.tech" target="_blank">
          (https://estuary.tech)
        </a>
      </h3>
      <img src="https://user-images.githubusercontent.com/310223/221114596-82d71663-9af6-46a5-b2c9-30b7b466b5c0.png" className={styles.image} />
      <p className={styles.paragraph}>Our solution to hot storage and application use cases.</p>
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

      <p className={styles.paragraph}>
        <strong>Microservices are built with WhyPFS-Core</strong> ➝ a lightweight bare minimum peer node for build storage-centric applications. It has built in capabilities for
        creating a Blockstore, peering with other IPFS and WhyPFS node peers, DAG service and Bitswap exchange to enable developers to build IPFS peer compatible applications.
      </p>

      <p className={styles.paragraph}>
        <strong>You can provision Edge nodes</strong> ➝ a deal-making storage node on the edge. Edge is an application that is both an upload and retrieval gateway, and takes
        advantage of the new modular deal making Engine “DELTA”. Edge is designed to store files for fast retrieval and “drips” down the files and contents to delta for each to
        replicated and persisted on the filecoin network. Customers can use it as a gateway and a reliable deal-making broker/engine.
      </p>

      <p className={styles.paragraph}>Features:</p>

      <p className={styles.paragraph}>
        ➝ GUI for file management, settings <br />
        ➝ API key generation <br />
        ➝ Metamask authentication <br />
        ➝ Pay for provisioning using Filecoin or USD <br />
        ➝ Dedicated infrastructure for paying users <br />
        ➝ Complete application API <br />
        ➝ Track which storage providers data is stored on <br />
        ➝ Track deal state <br />
        ➝ Failure handling and reconciliation <br />
        ➝ Track file, sector metadata, CID <br />
        ➝ Deal status tracking <br />
        ➝ Custom configuration <br />
        ➝ Storage provider details <br />
        ➝ Online deal prepping engine, micro service <br />
        ➝ Support HTTP, Bitswap <br />
        ➝ CAR generation for each piece <br />
        ➝ CommP calculation for each piece <br />
        ➝ Retrieval testing <br />
        ➝ Retry testying <br />
        ➝ Deal retrieving engine, micro service <br />
        ➝ Full tracking on deal state, data state, dataset state <br />
        ➝ Authentication <br />
        ➝ SSL terminated HA proxy (scale out solution) <br />
        ➝ Containerization / docker / K8s capable <br />
        ➝ API scoping / between modules / sandboxing <br />➝ CLI
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>February 9th, 2023</strong> — Installation of new infrastructure begins.
        </li>
        <li className={styles.item}>
          <strong>March 27th, 2023</strong> — Launch of V2 Infrastructure.
        </li>
        <li className={styles.item}>
          <strong>April 3rd, 2023</strong> — Begin onboarding of new users then retry onboarding all of NEAR's blockchain data and focus on getting a second blockchain customer.
        </li>
        <li className={styles.item}>
          <strong>May 5th, 2023</strong> — A new redesign of the core product and offering.
        </li>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — New roadmap released after our calibrations.
        </li>
      </ul>
      <h3 className={styles.subheading}>
        Bacalhau <span className={styles.subtle}>(External — Led by David Aronchick)</span>
      </h3>
      <p className={styles.paragraph}>We are proud that Estuary supports Bacalhau on their mission</p>

      <p className={styles.paragraph}>
        A service intended to allow you to run arbitrary computation jobs over data that is already stored on the decentralised IPFS and Filecoin networks - or, more succinctly,
        allows you to perform Compute over Data. By using the Bacalhau network, itself decentralised and permissionless, you can not only run jobs that transform your data; you can
        also cryptographically verify and prove that the computation wasn't tampered with and will always produce the same results - it's cloud computing, with receipts.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — Our Engineering team is lucky to work with Bacalhau, and will work on new roadmap changes to support them to the best of our ability.
        </li>
      </ul>
      <h3 className={styles.subheading}>Ptolemy</h3>
      <p className={styles.paragraph}>
        Ptolemy is designed to function as an orchestration engine to process large datasets typically confined to S3 buckets or contiguous filesystems. Ptolemy will package an
        entire filesystem structure in car files for deal making purposes. The goal of Ptolemy is to remove the effort around data prep for SPs and end users alike.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>March 1st, 2023</strong> — Planned release of V1 with support for an HTTP API that users can use to invoke data processing on existing filesystems.
        </li>
        <li className={styles.item}>
          <strong>March 22, 2023</strong> — Planned release of Ptolemy support for Web2 protocols, things like managing NFS/CIFS connectivity.
        </li>
        <li className={styles.item}>
          <strong>April 15th, 2023</strong> — Addition of UI to allow point and click functions vice using HTTP API calls.
        </li>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — New roadmap released after our calibrations.
        </li>
      </ul>

      <h3 className={styles.subheading}>
        Project Motion{' '}
        <a className={styles.website} href="https://miro.com/app/board/uXjVP6Fpbrg=/?share_link_id=94081429216" target="_blank">
          (Miro Board)
        </a>
      </h3>

      <p className={styles.paragraph}>The Engineering team is proud to support Angelo on his vision</p>

      <p className={styles.paragraph}>
        Project Motion name comes from storage in motion and is designed to address the eminent need for 3rd party tooling and cloud offering integration. As a 3rd party
        integration engine, the Motion engine can be fully integrated with your current stack, infrastructure and workloads. With it's open API you can store, process, retrieve and
        track any size dataset between your solution and the Filecoin storage network. The goal of Project Motion is to make adoption of Filecoin as a storage tier in existing
        tooling frictionless.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>Feb 28th, 2023</strong> — Initial roadmap release after internal discussions.
        </li>
      </ul>

      <h3 className={styles.subheading}>
        Storage Market & API{' '}
        <a className={styles.website} href="https://storage.market" target="_blank">
          (https://storage.market)
        </a>
      </h3>
      <p className={styles.paragraph}>
        Storage.market is an information hub on data storage products, showing analytics on the storage market and recent news. Evaluate prices across 337 storage products in the
        market with more information about storage products coming soon. We also provide an{' '}
        <a href="https://data.storage.market" target="_blank">
          API
        </a>{' '}
        where you can access Filecoin storage providers and get data from multiple reputation sources to pick storage providers to work with.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>May 12th, 2023</strong> — New roadmap released after our calibrations.
        </li>
      </ul>

      <h2 className={styles.roadmapHeading}>Team</h2>
      <img src="https://next-s3-public.s3.us-west-2.amazonaws.com/social/engineering.png" className={styles.image} />
    </div>
  );
}

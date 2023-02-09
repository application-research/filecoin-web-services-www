import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionRoadmap from '@components/SectionRoadmap';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SectionRoadmap />
    </DefaultLayout>
  );
}

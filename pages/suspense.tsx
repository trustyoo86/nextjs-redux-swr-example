import dynamic from 'next/dynamic';

const Profile = dynamic(() => import('../components/Profile'), { ssr: false });

function SuspensePage() {
  return (
    <Profile />
  );
}

export default SuspensePage;

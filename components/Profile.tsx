import { Suspense } from 'react';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('/api/profile');
  return res.json();
};

function Profile() {
  const { data } = useSWR('/FETCH/PROFILE', fetcher, { suspense: true });

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div>{data.name}</div>
    </Suspense>
  );
}

export default Profile;

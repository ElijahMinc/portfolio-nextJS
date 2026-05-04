import { GetServerSideProps } from 'next';

const Home = () => null;

export default Home;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/about',
    permanent: false,
  },
});


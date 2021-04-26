const Dyn = (props) => {
  return (
    <>
      <h1>Dynamic</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      value: process.env.GOPATH,
      value2: process.env.GRAPHQL_DOMAIN,
    }, // will be passed to the page component as props
  };
}

export default Dyn;

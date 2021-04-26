const Article = (props) => {
  return (
    <>
      <h1>Article</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>{process.env.DB_USER}</pre>
    </>
  );
};

export async function getStaticProps(context) {
  console.log(process.env.DB_USER);
  return {
    props: {
      value: context.params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "one" } }, { params: { slug: "two" } }],
    fallback: false,
  };
}

export default Article;

import { useGetAllProductQuery } from "../app/service/dummyData.js";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();

  if (isError) {
    return <h1>Error Found</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  //console.log(res);
  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllProducts;

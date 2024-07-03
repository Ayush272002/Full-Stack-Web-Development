import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2); //id =2
  console.log(data);
  if (isError) {
    return <h1>Error Found</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  //console.log(res);
  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

export default SpecificProduct;

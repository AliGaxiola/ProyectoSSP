import { queryData } from "@/utils/getQueryOutput";

const page = async ({ searchParams }) => {
  const queryOutput = await queryData(searchParams.q);
  console.log("searchParams -> " + JSON.stringify(searchParams));
  console.log(JSON.stringify(queryOutput, null, 2));
  return queryOutput;
};

export default page;

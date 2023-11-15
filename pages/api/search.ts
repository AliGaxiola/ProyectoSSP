import type { NextApiRequest, NextApiResponse } from "next";
import { queryData } from "@/utils/getQueryOutput";

type ResponseData = {
  queryOutput: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const queryOutput = await queryData(req.query.q);
  res.status(200).json({ queryOutput });
}

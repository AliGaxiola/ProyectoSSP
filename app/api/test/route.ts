import { pool } from "@/config/db";
import { NextApiResponse, NextApiRequest } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

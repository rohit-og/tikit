// pages/api/hotels.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getJson } from "serpapi";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // const { location, check_in_date, check_out_date, adults } = req.query;

  getJson(
    {
      engine: "google_hotels",
      q: "Bali Resorts",
      check_in_date: "2025-01-11",
      check_out_date: "2025-01-12",
      adults: "2",
      currency: "USD",
      gl: "us",
      hl: "en",
      api_key:
        "f8e014f2a0aaa4cf7e08e2afc14724575486bc3018e9b0bc033fdb3f4776f4cc",
    },
    (json) => {
      if (json && json.properties) {
        res.status(200).json(json.properties);
      } else {
        res.status(500).json({ error: "Failed to fetch data" });
      }
    }
  );
};

export default handler;

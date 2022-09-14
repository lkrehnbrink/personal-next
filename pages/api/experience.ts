// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ExperienceItem = {
  title?: string;
  role?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  startDate?: string;
};

type Data = ExperienceItem[];

const experience = [
  {
    title: "US Digital Partners",
    url: "https://www.usdigitalpartners.com/",
    role: "Senior Full-stack Developer",
    startDate: "2015-02-01",
  },
  {
    title: "ShareaStrength",
    url: "https://app.shareastrength.com/",
    role: "Lead Engineer, Head of Product",
    startDate: "2018-06-01",
  },
  {
    title: "Danke Studios",
    ulr: "https://www.dankestudios.com/",
    role: "Owner",
    startDate: "2017-07-01",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(experience);
}

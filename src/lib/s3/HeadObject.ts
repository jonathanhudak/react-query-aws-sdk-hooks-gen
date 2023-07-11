
import { HeadObjectCommand, HeadObjectCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useHeadObject({ region, input }: { region?: string, input: HeadObjectCommandInput }) {
  return useQuery(['HeadObjectCommand', input], () => client(region).send(new HeadObjectCommand(input)));
}

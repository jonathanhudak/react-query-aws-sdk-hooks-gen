
import { HeadBucketCommand, HeadBucketCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useHeadBucket({ region, input }: { region?: string, input: HeadBucketCommandInput }) {
  return useQuery(['HeadBucketCommand', input], () => client(region).send(new HeadBucketCommand(input)));
}

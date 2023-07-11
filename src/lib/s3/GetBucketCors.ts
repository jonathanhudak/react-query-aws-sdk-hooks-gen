
import { GetBucketCorsCommand, GetBucketCorsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketCors({ region, input }: { region?: string, input: GetBucketCorsCommandInput }) {
  return useQuery(['GetBucketCorsCommand', input], () => client(region).send(new GetBucketCorsCommand(input)));
}


import { GetBucketLocationCommand, GetBucketLocationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketLocation({ region, input }: { region?: string, input: GetBucketLocationCommandInput }) {
  return useQuery(['GetBucketLocationCommand', input], () => client(region).send(new GetBucketLocationCommand(input)));
}

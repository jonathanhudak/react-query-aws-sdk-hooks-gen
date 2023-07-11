
import { GetBucketTaggingCommand, GetBucketTaggingCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketTagging({ region, input }: { region?: string, input: GetBucketTaggingCommandInput }) {
  return useQuery(['GetBucketTaggingCommand', input], () => client(region).send(new GetBucketTaggingCommand(input)));
}

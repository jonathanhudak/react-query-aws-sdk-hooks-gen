
import { GetBucketOwnershipControlsCommand, GetBucketOwnershipControlsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketOwnershipControls({ region, input }: { region?: string, input: GetBucketOwnershipControlsCommandInput }) {
  return useQuery(['GetBucketOwnershipControlsCommand', input], () => client(region).send(new GetBucketOwnershipControlsCommand(input)));
}

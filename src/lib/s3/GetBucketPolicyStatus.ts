
import { GetBucketPolicyStatusCommand, GetBucketPolicyStatusCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketPolicyStatus({ region, input }: { region?: string, input: GetBucketPolicyStatusCommandInput }) {
  return useQuery(['GetBucketPolicyStatusCommand', input], () => client(region).send(new GetBucketPolicyStatusCommand(input)));
}

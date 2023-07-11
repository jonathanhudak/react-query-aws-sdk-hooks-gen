
import { GetBucketPolicyCommand, GetBucketPolicyCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketPolicy({ region, input }: { region?: string, input: GetBucketPolicyCommandInput }) {
  return useQuery(['GetBucketPolicyCommand', input], () => client(region).send(new GetBucketPolicyCommand(input)));
}

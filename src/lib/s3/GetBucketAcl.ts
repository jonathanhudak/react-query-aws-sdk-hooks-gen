
import { GetBucketAclCommand, GetBucketAclCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketAcl({ region, input }: { region?: string, input: GetBucketAclCommandInput }) {
  return useQuery(['GetBucketAclCommand', input], () => client(region).send(new GetBucketAclCommand(input)));
}


import { GetBucketEncryptionCommand, GetBucketEncryptionCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketEncryption({ region, input }: { region?: string, input: GetBucketEncryptionCommandInput }) {
  return useQuery(['GetBucketEncryptionCommand', input], () => client(region).send(new GetBucketEncryptionCommand(input)));
}

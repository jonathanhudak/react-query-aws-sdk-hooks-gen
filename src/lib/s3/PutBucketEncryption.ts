
import { PutBucketEncryptionCommand, PutBucketEncryptionCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketEncryption({ region, input }: { region?: string, input: PutBucketEncryptionCommandInput }) {
  return useMutation(['PutBucketEncryptionCommand', input], () => client(region).send(new PutBucketEncryptionCommand(input)));
}

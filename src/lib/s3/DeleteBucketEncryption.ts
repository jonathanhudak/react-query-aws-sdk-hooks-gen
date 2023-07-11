
import { DeleteBucketEncryptionCommand, DeleteBucketEncryptionCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketEncryption({ region, input }: { region?: string, input: DeleteBucketEncryptionCommandInput }) {
  return useMutation(['DeleteBucketEncryptionCommand', input], () => client(region).send(new DeleteBucketEncryptionCommand(input)));
}

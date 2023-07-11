
import { DeleteBucketPolicyCommand, DeleteBucketPolicyCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketPolicy({ region, input }: { region?: string, input: DeleteBucketPolicyCommandInput }) {
  return useMutation(['DeleteBucketPolicyCommand', input], () => client(region).send(new DeleteBucketPolicyCommand(input)));
}

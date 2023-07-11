
import { DeleteBucketCorsCommand, DeleteBucketCorsCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketCors({ region, input }: { region?: string, input: DeleteBucketCorsCommandInput }) {
  return useMutation(['DeleteBucketCorsCommand', input], () => client(region).send(new DeleteBucketCorsCommand(input)));
}


import { DeletePublicAccessBlockCommand, DeletePublicAccessBlockCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeletePublicAccessBlock({ region, input }: { region?: string, input: DeletePublicAccessBlockCommandInput }) {
  return useMutation(['DeletePublicAccessBlockCommand', input], () => client(region).send(new DeletePublicAccessBlockCommand(input)));
}

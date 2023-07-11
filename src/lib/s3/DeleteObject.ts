
import { DeleteObjectCommand, DeleteObjectCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteObject({ region, input }: { region?: string, input: DeleteObjectCommandInput }) {
  return useMutation(['DeleteObjectCommand', input], () => client(region).send(new DeleteObjectCommand(input)));
}

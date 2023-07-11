
import { DeleteObjectsCommand, DeleteObjectsCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteObjects({ region, input }: { region?: string, input: DeleteObjectsCommandInput }) {
  return useMutation(['DeleteObjectsCommand', input], () => client(region).send(new DeleteObjectsCommand(input)));
}

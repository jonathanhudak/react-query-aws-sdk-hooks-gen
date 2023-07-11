
import { DeleteObjectTaggingCommand, DeleteObjectTaggingCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteObjectTagging({ region, input }: { region?: string, input: DeleteObjectTaggingCommandInput }) {
  return useMutation(['DeleteObjectTaggingCommand', input], () => client(region).send(new DeleteObjectTaggingCommand(input)));
}


import { PutObjectTaggingCommand, PutObjectTaggingCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutObjectTagging({ region, input }: { region?: string, input: PutObjectTaggingCommandInput }) {
  return useMutation(['PutObjectTaggingCommand', input], () => client(region).send(new PutObjectTaggingCommand(input)));
}

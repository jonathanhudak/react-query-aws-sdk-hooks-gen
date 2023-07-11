
import { PutObjectRetentionCommand, PutObjectRetentionCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutObjectRetention({ region, input }: { region?: string, input: PutObjectRetentionCommandInput }) {
  return useMutation(['PutObjectRetentionCommand', input], () => client(region).send(new PutObjectRetentionCommand(input)));
}

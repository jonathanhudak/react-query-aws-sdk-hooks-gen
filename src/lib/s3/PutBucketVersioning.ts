
import { PutBucketVersioningCommand, PutBucketVersioningCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketVersioning({ region, input }: { region?: string, input: PutBucketVersioningCommandInput }) {
  return useMutation(['PutBucketVersioningCommand', input], () => client(region).send(new PutBucketVersioningCommand(input)));
}

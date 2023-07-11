
import { PutBucketLoggingCommand, PutBucketLoggingCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketLogging({ region, input }: { region?: string, input: PutBucketLoggingCommandInput }) {
  return useMutation(['PutBucketLoggingCommand', input], () => client(region).send(new PutBucketLoggingCommand(input)));
}

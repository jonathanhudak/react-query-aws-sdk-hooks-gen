
import { GetBucketLoggingCommand, GetBucketLoggingCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketLogging({ region, input }: { region?: string, input: GetBucketLoggingCommandInput }) {
  return useQuery(['GetBucketLoggingCommand', input], () => client(region).send(new GetBucketLoggingCommand(input)));
}

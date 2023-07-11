
import { GetObjectTaggingCommand, GetObjectTaggingCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectTagging({ region, input }: { region?: string, input: GetObjectTaggingCommandInput }) {
  return useQuery(['GetObjectTaggingCommand', input], () => client(region).send(new GetObjectTaggingCommand(input)));
}

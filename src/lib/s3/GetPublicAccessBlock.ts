
import { GetPublicAccessBlockCommand, GetPublicAccessBlockCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetPublicAccessBlock({ region, input }: { region?: string, input: GetPublicAccessBlockCommandInput }) {
  return useQuery(['GetPublicAccessBlockCommand', input], () => client(region).send(new GetPublicAccessBlockCommand(input)));
}

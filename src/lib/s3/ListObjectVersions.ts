
import { ListObjectVersionsCommand, ListObjectVersionsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListObjectVersions({ region, input }: { region?: string, input: ListObjectVersionsCommandInput }) {
  return useQuery(['ListObjectVersionsCommand', input], () => client(region).send(new ListObjectVersionsCommand(input)));
}

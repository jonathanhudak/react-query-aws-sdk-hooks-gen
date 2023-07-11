
import { ListObjectsCommand, ListObjectsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListObjects({ region, input }: { region?: string, input: ListObjectsCommandInput }) {
  return useQuery(['ListObjectsCommand', input], () => client(region).send(new ListObjectsCommand(input)));
}

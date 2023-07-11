
import { ListObjectsV2Command, ListObjectsV2CommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListObjectsV2({ region, input }: { region?: string, input: ListObjectsV2CommandInput }) {
  return useQuery(['ListObjectsV2Command', input], () => client(region).send(new ListObjectsV2Command(input)));
}

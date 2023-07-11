
import { ListBucketsCommand, ListBucketsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListBuckets({ region, input }: { region?: string, input: ListBucketsCommandInput }) {
  return useQuery(['ListBucketsCommand', input], () => client(region).send(new ListBucketsCommand(input)));
}

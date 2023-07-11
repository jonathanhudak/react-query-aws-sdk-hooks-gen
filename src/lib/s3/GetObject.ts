
import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObject({ region, input }: { region?: string, input: GetObjectCommandInput }) {
  return useQuery(['GetObjectCommand', input], () => client(region).send(new GetObjectCommand(input)));
}

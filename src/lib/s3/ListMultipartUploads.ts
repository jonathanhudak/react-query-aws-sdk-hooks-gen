
import { ListMultipartUploadsCommand, ListMultipartUploadsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListMultipartUploads({ region, input }: { region?: string, input: ListMultipartUploadsCommandInput }) {
  return useQuery(['ListMultipartUploadsCommand', input], () => client(region).send(new ListMultipartUploadsCommand(input)));
}

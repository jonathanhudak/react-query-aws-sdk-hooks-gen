
import { SelectObjectContentCommand, SelectObjectContentCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useSelectObjectContent({ region, input }: { region?: string, input: SelectObjectContentCommandInput }) {
  return useQuery(['SelectObjectContentCommand', input], () => client(region).send(new SelectObjectContentCommand(input)));
}

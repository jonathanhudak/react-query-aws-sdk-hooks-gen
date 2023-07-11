
import { ListPartsCommand, ListPartsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListParts({ region, input }: { region?: string, input: ListPartsCommandInput }) {
  return useQuery(['ListPartsCommand', input], () => client(region).send(new ListPartsCommand(input)));
}

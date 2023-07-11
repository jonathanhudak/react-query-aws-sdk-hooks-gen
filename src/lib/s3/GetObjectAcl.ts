
import { GetObjectAclCommand, GetObjectAclCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectAcl({ region, input }: { region?: string, input: GetObjectAclCommandInput }) {
  return useQuery(['GetObjectAclCommand', input], () => client(region).send(new GetObjectAclCommand(input)));
}

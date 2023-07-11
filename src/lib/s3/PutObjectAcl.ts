
import { PutObjectAclCommand, PutObjectAclCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutObjectAcl({ region, input }: { region?: string, input: PutObjectAclCommandInput }) {
  return useMutation(['PutObjectAclCommand', input], () => client(region).send(new PutObjectAclCommand(input)));
}

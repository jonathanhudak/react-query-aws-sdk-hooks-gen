
import { PutPublicAccessBlockCommand, PutPublicAccessBlockCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutPublicAccessBlock({ region, input }: { region?: string, input: PutPublicAccessBlockCommandInput }) {
  return useMutation(['PutPublicAccessBlockCommand', input], () => client(region).send(new PutPublicAccessBlockCommand(input)));
}

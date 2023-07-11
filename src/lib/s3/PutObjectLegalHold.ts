
import { PutObjectLegalHoldCommand, PutObjectLegalHoldCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutObjectLegalHold({ region, input }: { region?: string, input: PutObjectLegalHoldCommandInput }) {
  return useMutation(['PutObjectLegalHoldCommand', input], () => client(region).send(new PutObjectLegalHoldCommand(input)));
}

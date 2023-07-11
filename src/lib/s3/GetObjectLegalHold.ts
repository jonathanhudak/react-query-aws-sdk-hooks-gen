
import { GetObjectLegalHoldCommand, GetObjectLegalHoldCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectLegalHold({ region, input }: { region?: string, input: GetObjectLegalHoldCommandInput }) {
  return useQuery(['GetObjectLegalHoldCommand', input], () => client(region).send(new GetObjectLegalHoldCommand(input)));
}

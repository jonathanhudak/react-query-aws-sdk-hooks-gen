
import { PutObjectLockConfigurationCommand, PutObjectLockConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutObjectLockConfiguration({ region, input }: { region?: string, input: PutObjectLockConfigurationCommandInput }) {
  return useMutation(['PutObjectLockConfigurationCommand', input], () => client(region).send(new PutObjectLockConfigurationCommand(input)));
}

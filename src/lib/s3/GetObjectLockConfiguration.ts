
import { GetObjectLockConfigurationCommand, GetObjectLockConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectLockConfiguration({ region, input }: { region?: string, input: GetObjectLockConfigurationCommandInput }) {
  return useQuery(['GetObjectLockConfigurationCommand', input], () => client(region).send(new GetObjectLockConfigurationCommand(input)));
}

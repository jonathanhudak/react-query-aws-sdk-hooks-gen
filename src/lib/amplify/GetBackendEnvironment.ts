
import { GetBackendEnvironmentCommand, GetBackendEnvironmentCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetBackendEnvironment({ region, input }: { region?: string, input: GetBackendEnvironmentCommandInput }) {
  return useQuery(['GetBackendEnvironmentCommand', input], () => client(region).send(new GetBackendEnvironmentCommand(input)));
}

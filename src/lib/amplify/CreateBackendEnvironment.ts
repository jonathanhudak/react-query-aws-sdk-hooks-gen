
import { CreateBackendEnvironmentCommand, CreateBackendEnvironmentCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useCreateBackendEnvironment({ region, input }: { region?: string, input: CreateBackendEnvironmentCommandInput }) {
  return useMutation(['CreateBackendEnvironmentCommand', input], () => client(region).send(new CreateBackendEnvironmentCommand(input)));
}

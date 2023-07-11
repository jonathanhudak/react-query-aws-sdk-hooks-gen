
import { DeleteBackendEnvironmentCommand, DeleteBackendEnvironmentCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useDeleteBackendEnvironment({ region, input }: { region?: string, input: DeleteBackendEnvironmentCommandInput }) {
  return useMutation(['DeleteBackendEnvironmentCommand', input], () => client(region).send(new DeleteBackendEnvironmentCommand(input)));
}

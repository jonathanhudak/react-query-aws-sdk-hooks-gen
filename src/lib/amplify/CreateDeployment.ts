
import { CreateDeploymentCommand, CreateDeploymentCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useCreateDeployment({ region, input }: { region?: string, input: CreateDeploymentCommandInput }) {
  return useMutation(['CreateDeploymentCommand', input], () => client(region).send(new CreateDeploymentCommand(input)));
}

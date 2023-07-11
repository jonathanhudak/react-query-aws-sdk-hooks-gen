
import { StartDeploymentCommand, StartDeploymentCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useStartDeployment({ region, input }: { region?: string, input: StartDeploymentCommandInput }) {
  return useQuery(['StartDeploymentCommand', input], () => client(region).send(new StartDeploymentCommand(input)));
}

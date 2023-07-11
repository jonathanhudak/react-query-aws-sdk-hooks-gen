
import { CreateAppCommand, CreateAppCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useCreateApp({ region, input }: { region?: string, input: CreateAppCommandInput }) {
  return useMutation(['CreateAppCommand', input], () => client(region).send(new CreateAppCommand(input)));
}

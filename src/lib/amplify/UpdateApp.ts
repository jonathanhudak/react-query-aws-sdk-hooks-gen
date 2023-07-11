
import { UpdateAppCommand, UpdateAppCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useUpdateApp({ region, input }: { region?: string, input: UpdateAppCommandInput }) {
  return useMutation(['UpdateAppCommand', input], () => client(region).send(new UpdateAppCommand(input)));
}

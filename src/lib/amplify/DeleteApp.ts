
import { DeleteAppCommand, DeleteAppCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useDeleteApp({ region, input }: { region?: string, input: DeleteAppCommandInput }) {
  return useMutation(['DeleteAppCommand', input], () => client(region).send(new DeleteAppCommand(input)));
}

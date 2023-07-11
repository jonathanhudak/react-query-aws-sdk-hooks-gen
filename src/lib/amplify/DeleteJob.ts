
import { DeleteJobCommand, DeleteJobCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useDeleteJob({ region, input }: { region?: string, input: DeleteJobCommandInput }) {
  return useMutation(['DeleteJobCommand', input], () => client(region).send(new DeleteJobCommand(input)));
}

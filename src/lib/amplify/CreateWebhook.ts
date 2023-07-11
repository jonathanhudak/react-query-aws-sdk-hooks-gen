
import { CreateWebhookCommand, CreateWebhookCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useCreateWebhook({ region, input }: { region?: string, input: CreateWebhookCommandInput }) {
  return useMutation(['CreateWebhookCommand', input], () => client(region).send(new CreateWebhookCommand(input)));
}

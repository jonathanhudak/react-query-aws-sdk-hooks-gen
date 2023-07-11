
import { ListDomainAssociationsCommand, ListDomainAssociationsCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListDomainAssociations({ region, input }: { region?: string, input: ListDomainAssociationsCommandInput }) {
  return useQuery(['ListDomainAssociationsCommand', input], () => client(region).send(new ListDomainAssociationsCommand(input)));
}

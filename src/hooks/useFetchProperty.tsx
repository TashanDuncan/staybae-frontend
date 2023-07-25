import { AxiosResponse } from "axios";
import { UseQueryOptions, useQuery } from "react-query";
import Axios from "src/api/Axios";

const fetchProperty = (props: UseQueryOptions) => {
  const propertyId = props.queryKey && props.queryKey[1];
  return Axios.get(`/properties/${propertyId}`);
};

export const useFetchProperty = (
  id: string,
  onSuccess: (data: AxiosResponse) => void
) => {
  return useQuery([`property-detail`, id], fetchProperty, {
    onSuccess,
  });
};

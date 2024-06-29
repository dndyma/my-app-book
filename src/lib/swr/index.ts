export const fetcher = async (
  ...args: [RequestInfo, RequestInit?]
): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

interface GetPaginationUrlArgs {
  page: number;
  pageSize?: number;
}

const getPaginationUrl = ({ page, pageSize }: GetPaginationUrlArgs) =>
  `?page[number]=${page}&page[size]=${pageSize || 20}`;

export default getPaginationUrl;

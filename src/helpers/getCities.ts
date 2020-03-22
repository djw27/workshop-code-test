import request from "superagent";

export default async (value: string) => {
  try {
    const result = await request.get(
      `https://jsonmock.hackerrank.com/api/cities/?city=${value}`
    );
    return result.body.data;
  } catch (error) {
    return error;
  }
}

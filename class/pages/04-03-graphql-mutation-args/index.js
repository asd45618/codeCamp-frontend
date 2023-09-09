import { useMutation, gql } from "@apollo/client";

export default function GraphqlMutationPage() {
  const myGraphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(writer: $writer, title: $title, contents: $contents) {
        _id
        number
        message
      }
    }
  `;

  const [MyFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        //variables -> $ 역활
        writer: "훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다.",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}

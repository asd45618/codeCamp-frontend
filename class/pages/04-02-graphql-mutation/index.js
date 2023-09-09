import { useMutation, gql } from "@apollo/client";

export default function GraphqlMutationPage() {
  const myGraphqlSetting = gql`
    mutation {
      createProduct(
        seller: "맹구"
        createProductInput: {
          name: "모니터"
          detail: "삼성 모니터"
          price: 1000000
        }
      ) {
        _id
        number
        message
      }
    }
  `;

  const [MyFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await MyFunction();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}

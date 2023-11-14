import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [counter, setCounter] = useState<number>(0)

  // const [MyFunction] = useMutation<결과타입, 변수타입>(myGraphqlSetting);
  const [MyFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(myGraphqlSetting);

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

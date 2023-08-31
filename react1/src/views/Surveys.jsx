import PageComponent from '../components/PageComponent';
import { useStateContext } from '../context/ContextProvider';

export default function Surveys() {
  const { surveys } = useStateContext();
  console.log(surveys);

  return (
    <>
      <PageComponent title="Surveys">Surveys Content</PageComponent>
    </>
  );
}

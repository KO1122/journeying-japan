import { ClipLoader } from "react-spinners";

function Spinner({ loading }) {
  return (
    <ClipLoader
      className="fixed bottom-0 left-0 right-0 top-0 m-auto"
      loading={loading}
      size={150}
    />
  );
}

export default Spinner;

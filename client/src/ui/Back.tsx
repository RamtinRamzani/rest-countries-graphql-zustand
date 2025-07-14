import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn bg-white text-primary-700 border-[#e5e5e5] w-32"
      onClick={() => navigate(-1)}
    >
      <span className="text-3xl">←</span>
      Back
    </button>
  );
};

export default Back;

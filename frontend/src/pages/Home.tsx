import { Button, Textarea } from "@nextui-org/react";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleStartQuestions = () => {
    navigate("/editor");
  };

  console.log(location.state);
  return (
    <div className="flex items-center flex-col h-full w-full relative">
      <h1 className="text-3xl font-mono text-white">sitdownand.study</h1>
      <div className="w-full px-24 py-8 my-auto text-4xl">
      {/* backdrop-blur-sm backdrop-brightness-125" */}
        <Textarea
          className="text-2xl p-8 text-white rounded-2xl bg-gray-900" 
          size="lg"
          variant="bordered"
          placeholder={`What topic related to ${location.state.language} do you want to learn today?...`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.currentTarget.value);
            }
          }}
        />
        <div className="w-full flex items-center justify-center py-4">
          <Button
            size="lg"
            className="bg-white text-indigo-600 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 text-xl"
            onClick={() => handleStartQuestions()}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

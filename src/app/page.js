import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";

export default function Home() {
  return (
    <main className="w-full flex h-[1000px] items-start justify-center bg-[#0d0b21]">
      {/* ----Sidebar---- */}
      <Sidebar />
      {/* End of Sidebar */}

      <div className="w-full flex flex-col items-center justify-center">
        {/* ----Navbar---- */}
        <Navbar />
        {/* End of Navbar */}

        <div className="w-full flex items-center justify-center px-10">
          {/* ----big card---- */}
          <BigCard />
          {/* End of Big card */}
        </div>

        <div className="flex gap-5  w-[93%]">
          {/* 1st col  */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="flex items-center w-[280px] justify-between px-2 mb-2">
              To-Do List (24){" "}
              <div className="w-[30px] h-[30px] bg-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold cursor-pointer ml-2">
                +
              </div>
            </div>

            {/* SmallCard  */}
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#FFAB2D"}
            />
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#E328AF"}
            />
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#38E25D"}
            />
            {/* End of SmallCard */}
          </div>

          {/* 2nd col  */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="flex items-center w-[280px] justify-between px-2 mb-2">
              In Progress (2){" "}
              <div className="w-[30px] h-[30px] bg-[#211A75] text-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold ml-2">
                +
              </div>
            </div>

            {/* SmallCard  */}
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#5ECFFF"}
            />
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#FF4A55"}
            />
            {/* End of SmallCard */}
          </div>

          {/* 3rd col  */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="flex items-center w-[280px] justify-between px-2 mb-2">
              Done (3){" "}
              <div className="w-[30px] h-[30px] bg-[#211A75] text-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold ml-2">
                +
              </div>
            </div>
            {/* SmallCard  */}
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#FF4A55"}
            />
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#38E25D"}
            />
            <SmallCard
              title={"Information"}
              desc={
                "Create sign up sheet for holiday student/parent conferences."
              }
              color={"#E328AF"}
            />
            {/* End of SmallCard */}
          </div>

          {/* 4th col  */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="flex items-center w-[230px] justify-between px-2 mb-2">
              Revised (0){" "}
              <div className="w-[30px] h-[30px] bg-[#211A75] text-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold ml-2">
                +
              </div>
            </div>

            {/* SmallCard  */}
            <div className="flex flex-col justify-center w-[230px] h-[90px] bg-[#211A75] items-center mb-4 rounded-xl hover:rotate-12 hover:translate-y-8 hover:translate-x-4">
              <div className="w-[200px] h-[60px] bg-[#15132B] rounded-xl border-dashed border-[#7879F1] text-[#7879F1] text-[12px] flex justify-center items-center font-bold border-2">
                Move card here
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

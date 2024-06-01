import Image from "next/image";

export default function Home() {
  const boxclassname:any = 'border rounded p-2 bg-[#223341] cursor-pointer text-center';
  const renderBoxes = (numBoxes: number) => {
    const boxes = [];
    for (let i = 0; i < numBoxes; i++) {
      boxes.push(
        <div className={boxclassname} key={i}>
          <h4>test</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            laborum et? Vel ipsa tenetur officiis perferendis repellat quae!
            Eum aperiam veniam libero quia harum quo eaque illum voluptas
            itaque nesciunt?
          </p>
        </div>
      );
    }
    return boxes;
  };

  return (
    <main className="main p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {renderBoxes(20)}
      </div>
    </main>
  );
}

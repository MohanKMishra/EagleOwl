import { Progress } from "antd";

const Laka = ({ item }) => {
  const handleColor = (e) => {
    if (e >= 0 && e <= 33) {
      return "red";
    } else if (e > 34 && e <= 75) {
      return "yellow";
    } else {
      return "green";
    }
  };

  return (
    <div className="progress_circle">
      <h4>{item.name}</h4>
      <Progress
        type="circle"
        percent={item.percent}
        strokeColor={handleColor(item.percent)}
        width={80}
      />
    </div>
  );
};

export default Laka;

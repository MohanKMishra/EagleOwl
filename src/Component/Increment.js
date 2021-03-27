import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const Increment = ({ item }) => {
  return (
    <div className="progress_circle">
      <h4>{item.name}</h4>
      <div>
        {item.increment ? (
          <>
            <ArrowUpOutlined style={{ fontSize: "36px", color: "#008000",marginLeft:"28px" }} />
            <span>{item.percent}</span>
          </>
        ) : (
          <>
            <ArrowDownOutlined style={{ fontSize: "36px", color: "#08c",marginLeft:"28px" }} />
            <span>{item.percent}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Increment;

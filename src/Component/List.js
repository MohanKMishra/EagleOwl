import React, { useEffect, useState } from "react";
import { Table, Radio, Tabs } from "antd";

const { TabPane } = Tabs;
const tabs = [
  { tab: "ALL REIPE(S)", key: "1" },
  { tab: "INCORRECT", key: "2" },
  { tab: "UNTAGGED", key: "3" },
  { tab: "DISABLED", key: "4" },
];

const List = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [data, setData] = useState([]);
  const [activeKey, setActivekey] = useState("");
  const [page, setPage] = useState(1);
  const [height, setHeight] = useState(50);

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      sorter: {},
      align: "left",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "LASTUPDATED",
      dataIndex: "last_updated",
      sorter: {
        compare: (a, b) => new Date(a.last_updated) - new Date(b.last_updated),
      },
      align: "center",
    },
    {
      title: "COGS%",
      dataIndex: "cogs",
      width: 70,
      sorter: { compare: (a, b) => a.cogs - b.cogs },
      align: "center",
    },
    {
      title: "COST PRICE",
      dataIndex: "cost_price",
      width: 70,
      sorter: { compare: (a, b) => a.cost_price - b.cost_price },
      align: "left",
    },
    {
      title: "SALE PRICE",
      dataIndex: "sale_price",
      width: 80,
      sorter: { compare: (a, b) => a.sale_price },
    },
    {
      title: "GROSS MARGIN",
      dataIndex: "gross_margin",
      width: 70,
      sorter: { compare: (a, b) => a.gross_margin - b.gross_margin },
    },
    {
      title: "TAGS/ACTIONS",
      dataIndex: "tags",
      render: () => <p>Indian Ma ..</p>,
      width: 70,
    },
  ];

  const changeTab = (key) => {
    if (activeKey !== key) {
      setData([]);
      setPage(1);
    }
    if (key === "1") {
      setActivekey("");
    } else if (key === "2") {
      setActivekey("&is_incorrect=true");
    } else if (key === "3") {
      setActivekey("&is_untagged=true");
    } else {
      setActivekey("&id_disabled=true");
    }
  };

  const rowSelection = {
    onchange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKes:${selectedRowKeys}`,
        `selectedRows`,
        selectedRows
      );
    },
  };

  const getData = () => {
    fetch(
      `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=${page}${activeKey}`
    )
      .then((result) => result.json())
      .then((res) => {
        let arr = res.results.map((i) => {
          let date = new Date(i.last_updated.date);
          return {
            ...i,
            key: i.id,
            last_updated: date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          };
        });

        setData(data.concat(arr));
      });
  };

  useEffect(() => {
    getData();
  }, [activeKey]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getData();
  }, [page]);

  const handleScroll = () => {
    if (window.scrollY > height) {
      setPage(page + 1);
      setHeight(height + 390);
    }
  };

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      ></Radio.Group>
      <Tabs defaultActiveKey="1" type="card" onChange={changeTab}>
        {tabs.map((item) => {
          return (
            <TabPane tab={item.tab} key={item.key}>
              <Table
                rowSelection={{ type: selectionType, ...rowSelection }}
                columns={columns}
                dataSource={data}
                bordered="true"
                size="small"
                headercolor="black"
                pagination={false}
                scroll={{ x: 1300 }}
              />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default List;

import { Select, Button } from "antd";

const FormInput = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "15vh",
        right: "2vw",
        padding: 20,
        backgroundColor: "white",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
        zIndex: 400,
        width: "24vw",
      }}
    >
      <div style={{ margin: "4px 0px", fontWeight: "bold" }}>
        Select Country:
      </div>
      <Select style={{ width: "100%" }} defaultValue="India" size="large">
        <Select.Option value="India">India</Select.Option>
        <Select.Option value="United States">United States</Select.Option>
        <Select.Option value="United Kingdom">United Kingdom</Select.Option>
      </Select>
      <Button style={{ marginTop: "12px", width: "50%" }} size="large">
        Load
      </Button>
    </div>
  );
};

export default FormInput;

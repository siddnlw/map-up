import { Select, Button, Form } from "antd";
import { changeRegion } from "../actions/regions";
import { connect } from "react-redux";

const FormInput = (props) => {
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
        width: "30vw",
      }}
    >
      <Form
        initialValues={{ region: props.region }}
        layout="vertical"
        onFinish={({ region }) => {
          props.changeRegion(region);
        }}
      >
        <Form.Item
          label="Select country"
          name="region"
          rules={[
            { required: true, message: "Please select a valid country!" },
          ]}
        >
          <Select size="large">
            <Select.Option value="India">India</Select.Option>
            <Select.Option value="United States">United States</Select.Option>
            <Select.Option value="United Kingdom">United Kingdom</Select.Option>
          </Select>
        </Form.Item>

        <Button htmlType="submit" style={{ width: "50%" }} size="large">
          Load
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  region: state.regions.region,
});

const mapDispatchToProps = {
  changeRegion,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);

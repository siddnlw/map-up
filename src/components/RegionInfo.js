import { connect } from "react-redux";
import { Card, Descriptions } from "antd";

const RegionInfo = (props) => {
  if (!props.region) return null;
  return (
    <Card
      style={{
        position: "absolute",
        top: "48vh",
        right: "2vw",
        backgroundColor: "white",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
        zIndex: 400,
        width: "30vw",
      }}
      bodyStyle={{ padding: 0 }}
      title={<center>{props.region}</center>}
    >
      <Descriptions bordered column={1} size="small">
        <Descriptions.Item label="Currency Symbol">
          {props.regionInfo.currency_symbol}
        </Descriptions.Item>
        <Descriptions.Item label="Units of Speed">
          {props.regionInfo.units_of_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Units of Distance">
          {props.regionInfo.units_of_distance}
        </Descriptions.Item>
        <Descriptions.Item label="Units of Volume">
          {props.regionInfo.units_of_volume}
        </Descriptions.Item>
        <Descriptions.Item label="Timezone">
          {props.regionInfo.timezone}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  region: state.regions.region,
  regionInfo: state.regions.regionInfo || {},
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegionInfo);

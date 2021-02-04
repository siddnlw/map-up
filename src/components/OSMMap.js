import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { connect } from "react-redux";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const OSMMap = (props) => {
  const map = useMap();
  const position = props.regionInfo.points || [0, 0];

  useEffect(() => {
    map.flyTo([position[0], position[1] + 10], props.regionInfo.zoomLevel);
  }, [position]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{props.region}</Popup>
        <Popup>{position[0]}</Popup>
      </Marker>
    </>
  );
};

const mapStateToProps = (state) => ({
  region: state.regions.region,
  regionInfo: state.regions.regionInfo,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OSMMap);

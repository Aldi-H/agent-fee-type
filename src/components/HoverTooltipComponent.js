import { OverlayTrigger, Tooltip } from "react-bootstrap";

const HoverTooltip = (props) => {
  const { text, children } = props;

  const tooltip = <Tooltip id="hover-tooltip">{text}</Tooltip>;

  return (
    <OverlayTrigger placement="top" overlay={tooltip}>
      {children}
    </OverlayTrigger>
  );
};

export default HoverTooltip;

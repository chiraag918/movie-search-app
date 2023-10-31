import WarningIcon from "../../assets/images/warning.png";
import "./styles.scss";

const Fallback = () => {
	return (
		<div className="fallbackContainer">
			<img className="fallbackIcon" src={WarningIcon} alt="warning" />
			<div className="fallbackMsg">
				No records found for this actor or genre. Please try with someother
				value.
			</div>
		</div>
	);
};

export default Fallback;

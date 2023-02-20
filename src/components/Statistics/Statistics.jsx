import PropTypes from "prop-types";
import { StatContainer } from "./Statistics.styled";
import { StatTitle } from "./Statistics.styled";
import { StatList } from "./Statistics.styled";
import { StatListItem } from "./Statistics.styled";
import { StatLabel } from "./Statistics.styled";
import { StatPercent } from "./Statistics.styled";

function getRandomHexColor() {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
  }

export default function Statistics({ title, stats }) {

    return (
        <StatContainer>
  {title && <StatTitle>{title}</StatTitle>}
      
  <StatList>
  {stats.map(stat => (
    <StatListItem
        key={stat.id}
        style={{
        backgroundColor: getRandomHexColor(),
        }}
        >
      <StatLabel>{stat.label}</StatLabel>
      <StatPercent>{stat.percentage}%</StatPercent>
    </StatListItem>
  ))}
  </StatList>
</StatContainer>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };
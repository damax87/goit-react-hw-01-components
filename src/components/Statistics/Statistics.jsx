import PropTypes from "prop-types";

function getRandomHexColor() {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
  }

export default function Statistics({ title, stats }) {

    return (
        <section className="statistics">
  {title && <h2 className="title">{title}</h2>}
      
  <ul className="stat-list">
  {stats.map(stat => (
    <li className={title ? "statListItem" : "statListItemNoTitle"}
        key={stat.id}
        style={{
        backgroundColor: getRandomHexColor(),
        }}
        >
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  ))}
  </ul>
</section>
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
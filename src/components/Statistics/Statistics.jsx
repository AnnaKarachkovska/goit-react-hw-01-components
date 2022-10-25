import PropTypes from "prop-types";
import slyles from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
  return (<section className={slyles.statistics}>
      {title && <h2 className={slyles.title}>{ title }</h2>}
      <ul className={slyles.statList}>
        {stats.map(item => <li key={ item.id } className={slyles.item}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span></li>)}
      </ul>
</section>);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
};
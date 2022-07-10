import PropTypes from 'prop-types';
import { Section,Title, StatsUl, StatLi,Span } from './Statistics.styled'
import { randomColor } from 'Utilits/Utilits';

export const Statistics = ({ title, stats }) => {
  return (
    <Section >
      {title && <Title>{title}</Title>}
      <StatsUl >
        {stats.map(({ id, label, percentage }) => (
            <StatLi
                key={id}
                style={{backgroundColor: randomColor()}}>
            <Span >{label}</Span>
            <Span >{percentage}%</Span>
            
          </StatLi>
        ))}
      </StatsUl>
    </Section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};





